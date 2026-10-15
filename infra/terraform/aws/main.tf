locals {
  # domain: academy.example.com (subdomain set) or example.com (apex); empty -> no DNS/HTTPS
  name   = "${var.project}-${var.environment}"
  domain = var.hosted_zone == "" ? "" : (var.subdomain == "" ? var.hosted_zone : "${var.subdomain}.${var.hosted_zone}")
}

data "aws_availability_zones" "available" {
  state = "available"
}

# Ubuntu 24.04 LTS (Canonical's official account)
data "aws_ami" "ubuntu" {
  most_recent = true
  owners      = ["099720109477"]
  filter {
    name   = "name"
    values = ["ubuntu/images/hvm-ssd-gp3/ubuntu-noble-24.04-amd64-server-*"]
  }
  filter {
    name   = "virtualization-type"
    values = ["hvm"]
  }
}

# ── Network: VPC → public subnet → Internet Gateway ──────────────────────────
resource "aws_vpc" "main" {
  cidr_block           = "10.20.0.0/16"
  enable_dns_support   = true
  enable_dns_hostnames = true
  tags                 = { Name = "${local.name}-vpc" }
}

resource "aws_internet_gateway" "main" {
  vpc_id = aws_vpc.main.id
  tags   = { Name = "${local.name}-igw" }
}

resource "aws_subnet" "public" {
  # map_public_ip_on_launch: first-boot apt/git need internet before the Elastic IP is attached.
  vpc_id                  = aws_vpc.main.id
  cidr_block              = "10.20.1.0/24"
  availability_zone       = data.aws_availability_zones.available.names[0]
  map_public_ip_on_launch = true
  tags                    = { Name = "${local.name}-public" }
}

resource "aws_route_table" "public" {
  vpc_id = aws_vpc.main.id
  route {
    cidr_block = "0.0.0.0/0"
    gateway_id = aws_internet_gateway.main.id
  }
  tags = { Name = "${local.name}-public-rt" }
}

resource "aws_route_table_association" "public" {
  subnet_id      = aws_subnet.public.id
  route_table_id = aws_route_table.public.id
}

# ── Security group: SSH from your IP only, HTTP/HTTPS from anywhere ─────────
resource "aws_security_group" "web" {
  name        = "${local.name}-web"
  description = "Cloud Academy web server"
  vpc_id      = aws_vpc.main.id
  tags        = { Name = "${local.name}-web" }
}

resource "aws_vpc_security_group_ingress_rule" "ssh" {
  security_group_id = aws_security_group.web.id
  description       = "SSH from admin IP"
  cidr_ipv4         = var.allowed_ssh_cidr
  ip_protocol       = "tcp"
  from_port         = 22
  to_port           = 22
}

resource "aws_vpc_security_group_ingress_rule" "http" {
  security_group_id = aws_security_group.web.id
  description       = "HTTP"
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "tcp"
  from_port         = 80
  to_port           = 80
}

resource "aws_vpc_security_group_ingress_rule" "https" {
  security_group_id = aws_security_group.web.id
  description       = "HTTPS"
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "tcp"
  from_port         = 443
  to_port           = 443
}

resource "aws_vpc_security_group_egress_rule" "all" {
  security_group_id = aws_security_group.web.id
  description       = "Outbound (apt, git, Docker Hub, npm)"
  cidr_ipv4         = "0.0.0.0/0"
  ip_protocol       = "-1"
}

# ── Compute ──────────────────────────────────────────────────────────────────
resource "aws_key_pair" "admin" {
  key_name   = "${local.name}-admin"
  public_key = file(pathexpand(var.ssh_public_key_path))
}

resource "aws_instance" "web" {
  ami                    = data.aws_ami.ubuntu.id
  instance_type          = var.instance_type
  subnet_id              = aws_subnet.public.id
  vpc_security_group_ids = [aws_security_group.web.id]
  key_name               = aws_key_pair.admin.key_name

  user_data = templatefile("${path.module}/../../cloud-init/bootstrap.sh.tftpl", {
    repo_url   = var.repo_url
    repo_ref   = var.repo_ref
    admin_user = "ubuntu"
    domain     = local.domain
  })
  user_data_replace_on_change = true

  metadata_options {
    http_tokens   = "required" # IMDSv2 only
    http_endpoint = "enabled"
  }

  root_block_device {
    volume_type           = "gp3"
    volume_size           = var.root_volume_gb
    encrypted             = true
    delete_on_termination = true
  }

  tags = { Name = "${local.name}-web" }
}

resource "aws_eip" "web" {
  domain   = "vpc"
  instance = aws_instance.web.id
  tags     = { Name = "${local.name}-eip" }

  depends_on = [aws_internet_gateway.main]
}

# ── DNS: Route 53 A record → Elastic IP (only when hosted_zone is set) ──────
# The hosted zone must already exist (Route 53 creates it when you register a domain).
data "aws_route53_zone" "main" {
  count        = local.domain == "" ? 0 : 1
  name         = var.hosted_zone
  private_zone = false
}

resource "aws_route53_record" "web" {
  count   = local.domain == "" ? 0 : 1
  zone_id = data.aws_route53_zone.main[0].zone_id
  name    = local.domain
  type    = "A"
  ttl     = 300
  records = [aws_eip.web.public_ip]
}
