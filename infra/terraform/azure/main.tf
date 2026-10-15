locals {
  name = "${var.project}-${var.environment}"
  tags = {
    project   = var.project
    env       = var.environment
    owner     = var.owner
    managedBy = "terraform"
  }
}

# Everything lives in one resource group → `terraform destroy` (or deleting the RG) removes it all.
resource "azurerm_resource_group" "main" {
  name     = "rg-${local.name}"
  location = var.location
  tags     = local.tags
}

# ── Network: VNet → subnet (+ NSG) ───────────────────────────────────────────
resource "azurerm_virtual_network" "main" {
  name                = "vnet-${local.name}"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  address_space       = ["10.30.0.0/16"]
  tags                = local.tags
}

resource "azurerm_subnet" "web" {
  name                 = "snet-web"
  resource_group_name  = azurerm_resource_group.main.name
  virtual_network_name = azurerm_virtual_network.main.name
  address_prefixes     = ["10.30.1.0/24"]
}

resource "azurerm_network_security_group" "web" {
  name                = "nsg-${local.name}-web"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tags                = local.tags

  security_rule {
    name                       = "Allow-SSH-Admin"
    priority                   = 100
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "22"
    source_address_prefix      = var.allowed_ssh_cidr
    destination_address_prefix = "*"
  }

  security_rule {
    name                       = "Allow-HTTP"
    priority                   = 110
    direction                  = "Inbound"
    access                     = "Allow"
    protocol                   = "Tcp"
    source_port_range          = "*"
    destination_port_range     = "80"
    source_address_prefix      = "Internet"
    destination_address_prefix = "*"
  }
}

resource "azurerm_subnet_network_security_group_association" "web" {
  subnet_id                 = azurerm_subnet.web.id
  network_security_group_id = azurerm_network_security_group.web.id
}

resource "azurerm_public_ip" "web" {
  name                = "pip-${local.name}-web"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  allocation_method   = "Static"
  sku                 = "Standard"
  zones               = [var.zone]
  tags                = local.tags
}

resource "azurerm_network_interface" "web" {
  name                = "nic-${local.name}-web"
  location            = azurerm_resource_group.main.location
  resource_group_name = azurerm_resource_group.main.name
  tags                = local.tags

  ip_configuration {
    name                          = "ipconfig1"
    subnet_id                     = azurerm_subnet.web.id
    private_ip_address_allocation = "Dynamic"
    public_ip_address_id          = azurerm_public_ip.web.id
  }
}

# ── Compute ──────────────────────────────────────────────────────────────────
resource "azurerm_linux_virtual_machine" "web" {
  name                            = "vm-${local.name}-web"
  location                        = azurerm_resource_group.main.location
  resource_group_name             = azurerm_resource_group.main.name
  size                            = var.vm_size
  zone                            = var.zone
  admin_username                  = var.admin_username
  disable_password_authentication = true
  network_interface_ids           = [azurerm_network_interface.web.id]
  secure_boot_enabled             = true
  vtpm_enabled                    = true
  tags                            = local.tags

  admin_ssh_key {
    username   = var.admin_username
    public_key = file(pathexpand(var.ssh_public_key_path))
  }

  os_disk {
    name                 = "osdisk-${local.name}-web"
    caching              = "ReadWrite"
    storage_account_type = "StandardSSD_LRS"
    disk_size_gb         = 30
  }

  source_image_reference {
    publisher = "Canonical"
    offer     = "ubuntu-24_04-lts"
    sku       = "server"
    version   = "latest"
  }

  boot_diagnostics {} # managed storage account

  custom_data = base64encode(templatefile("${path.module}/../../cloud-init/bootstrap.sh.tftpl", {
    repo_url   = var.repo_url
    repo_ref   = var.repo_ref
    admin_user = var.admin_username
  }))

  depends_on = [azurerm_subnet_network_security_group_association.web]
}

# Deallocate every night — the VM stops costing compute until you start it again.
resource "azurerm_dev_test_global_vm_shutdown_schedule" "web" {
  virtual_machine_id    = azurerm_linux_virtual_machine.web.id
  location              = azurerm_resource_group.main.location
  enabled               = true
  daily_recurrence_time = var.auto_shutdown_time
  timezone              = "Tokyo Standard Time"

  notification_settings {
    enabled = false
  }
  tags = local.tags
}
