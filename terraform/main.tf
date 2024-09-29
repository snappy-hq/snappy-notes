resource "azurerm_resource_group" "snappy_rg" {
  name     = "snappy-notes-resource-group"
  location = "South India"
}

resource "azurerm_virtual_network" "snappy_vpc" {
  name                = "snappy-notes-vpc"
  resource_group_name = azurerm_resource_group.snappy_rg.name
  location            = azurerm_resource_group.snappy_rg.location
  address_space       = ["10.0.0.0/16"]
}

resource "azurerm_subnet" "snappy_subnet" {
  name                 = "snappy-notes-subnet"
  resource_group_name  = azurerm_resource_group.snappy_rg.name
  virtual_network_name = azurerm_virtual_network.snappy_vpc.name
  address_prefixes     = ["10.0.2.0/24"]
}

resource "azurerm_public_ip" "snappy_public_ip" {
  name                = "snappy-notes-public-ip"
  location            = azurerm_resource_group.snappy_rg.location
  resource_group_name = azurerm_resource_group.snappy_rg.name
  allocation_method   = "Static"
}

resource "azurerm_network_interface" "snappy_nic" {
  name                = "snappy-notes-internal-nic"
  location            = azurerm_resource_group.snappy_rg.location
  resource_group_name = azurerm_resource_group.snappy_rg.name

  ip_configuration {
    name                          = "internal"
    subnet_id                     = azurerm_subnet.snappy_subnet.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.snappy_public_ip.id
  }
}

resource "azurerm_network_security_group" "snappy_nsg" {
  name                = "snappy-notes-security-group"
  location            = azurerm_resource_group.snappy_rg.location
  resource_group_name = azurerm_resource_group.snappy_rg.name
}

resource "azurerm_network_security_rule" "snappy_nsg_rule_allow_outbound_all" {
  name                        = "allow-outbound-traffic"
  priority                    = 100
  direction                   = "Outbound"
  access                      = "Allow"
  protocol                    = "Tcp"
  source_port_range           = "*"
  destination_port_range      = "*"
  source_address_prefix       = "*"
  destination_address_prefix  = "*"
  resource_group_name         = azurerm_resource_group.snappy_rg.name
  network_security_group_name = azurerm_network_security_group.snappy_nsg.name
}

resource "azurerm_network_security_rule" "snappy_nsg_rule_allow_inbound_http" {
  name                        = "allow-inbound-traffic-http"
  priority                    = 101
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"
  source_port_range           = "*"
  destination_port_range      = "80"
  source_address_prefix       = "*"
  destination_address_prefix  = "*"
  resource_group_name         = azurerm_resource_group.snappy_rg.name
  network_security_group_name = azurerm_network_security_group.snappy_nsg.name
}

resource "azurerm_network_security_rule" "snappy_nsg_rule_allow_inbound_https" {
  name                        = "allow-inbound-traffic-https"
  priority                    = 102
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"
  source_port_range           = "*"
  destination_port_range      = "443"
  source_address_prefix       = "*"
  destination_address_prefix  = "*"
  resource_group_name         = azurerm_resource_group.snappy_rg.name
  network_security_group_name = azurerm_network_security_group.snappy_nsg.name
}

resource "azurerm_network_security_rule" "snappy_nsg_rule_allow_ssh" {
  name                        = "allow-inbound-traffic-ssh"
  priority                    = 103
  direction                   = "Inbound"
  access                      = "Allow"
  protocol                    = "Tcp"
  source_port_range           = "*"
  destination_port_range      = "22"
  source_address_prefix       = "*"
  destination_address_prefix  = "*"
  resource_group_name         = azurerm_resource_group.snappy_rg.name
  network_security_group_name = azurerm_network_security_group.snappy_nsg.name
}

resource "azurerm_subnet_network_security_group_association" "example" {
  subnet_id                 = azurerm_subnet.snappy_subnet.id
  network_security_group_id = azurerm_network_security_group.snappy_nsg.id
}

resource "azurerm_linux_virtual_machine" "snappy_vm" {
  name                = "snappy-vm-b1s-testing"
  resource_group_name = azurerm_resource_group.snappy_rg.name
  location            = azurerm_resource_group.snappy_rg.location
  size                = "Standard_B1s"
  admin_username      = "piush"
  network_interface_ids = [
    azurerm_network_interface.snappy_nic.id,
  ]

  admin_ssh_key {
    username   = "piush"
    public_key = file("~/.ssh/id_rsa.pub")
  }

  os_disk {
    caching              = "ReadWrite"
    storage_account_type = "Premium_LRS"
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "0001-com-ubuntu-server-jammy"
    sku       = "22_04-lts"
    version   = "latest"
  }
}
