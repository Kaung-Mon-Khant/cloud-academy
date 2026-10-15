variable "project" {
  type    = string
  default = "cloud-academy"
}

variable "environment" {
  type    = string
  default = "lab"
}

variable "region" {
  type        = string
  description = "AWS region (Tokyo by default)."
  default     = "ap-northeast-1"
}

variable "instance_type" {
  type        = string
  description = "t3.small (2 vCPU, 2 GiB) is the smallest size that builds the images comfortably."
  default     = "t3.small"
}

variable "root_volume_gb" {
  type    = number
  default = 20
}

variable "ssh_public_key_path" {
  type        = string
  description = "Path to your SSH public key, e.g. ~/.ssh/id_ed25519.pub"
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "Your public IP in CIDR form (e.g. 203.0.113.10/32). Port 22 is open only to this range."
  validation {
    condition     = can(cidrhost(var.allowed_ssh_cidr, 0)) && var.allowed_ssh_cidr != "0.0.0.0/0"
    error_message = "Use your own IP (x.x.x.x/32). Opening SSH to 0.0.0.0/0 is not allowed."
  }
}

variable "repo_url" {
  type        = string
  description = "Git URL of this repository (HTTPS). The VM clones it on first boot."
}

variable "repo_ref" {
  type    = string
  default = "main"
}
