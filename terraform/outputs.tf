output "vm_public_ip" {
	value = azurerm_public_ip.snappy_public_ip.ip_address
}