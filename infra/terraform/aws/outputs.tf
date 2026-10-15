output "public_ip" {
  value = aws_eip.web.public_ip
}

output "url" {
  value = local.domain == "" ? "http://${aws_eip.web.public_ip}/" : "https://${local.domain}/"
}

output "domain" {
  value = local.domain
}

output "ssh" {
  value = "ssh ubuntu@${aws_eip.web.public_ip}"
}

output "bootstrap_log" {
  value = "ssh ubuntu@${aws_eip.web.public_ip} 'sudo tail -f /var/log/cloud-academy-bootstrap.log'"
}
