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