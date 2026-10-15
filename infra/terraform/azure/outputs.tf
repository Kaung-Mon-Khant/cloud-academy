output "public_ip" {
  value = azurerm_public_ip.web.ip_address
}

output "url" {
  value = "http://${azurerm_public_ip.web.ip_address}/"
}

output "ssh" {
  value = "ssh ${var.admin_username}@${azurerm_public_ip.web.ip_address}"
}

output "bootstrap_log" {
  value = "ssh ${var.admin_username}@${azurerm_public_ip.web.ip_address} 'sudo tail -f /var/log/cloud-academy-bootstrap.log'"
}

output "resource_group" {
  value = azurerm_resource_group.main.name
}
