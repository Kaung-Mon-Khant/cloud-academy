variable "subscription_id" {
  type        = string
  description = "Target subscription (az account show --query id -o tsv). Use a lab subscription, not production."
}

variable "project" {
  type    = string
  default = "cloud-academy"
}

variable "environment" {
  type    = string
  default = "lab"
}

variable "owner" {
  type        = string
  description = "Tag value so teammates know whose lab this is."
}

variable "location" {
  type    = string
  default = "japaneast"
}

variable "zone" {
  type        = string
  description = "Availability zone for the VM and its public IP."
  default     = "1"
}

variable "vm_size" {
  type        = string
  description = "Standard_B2s (2 vCPU, 4 GiB) is cheap and builds the images comfortably."
  default     = "Standard_B2s"
}

variable "admin_username" {
  type    = string
  default = "azureuser"
}

variable "ssh_public_key_path" {
  type        = string
  description = "Path to your SSH public key, e.g. ~/.ssh/id_ed25519.pub"
}

variable "allowed_ssh_cidr" {
  type        = string
  description = "Your public IP in CIDR form (e.g. 203.0.113.10/32)."
  validation {
    condition     = can(cidrhost(var.allowed_ssh_cidr, 0)) && var.allowed_ssh_cidr != "0.0.0.0/0"
    error_message = "Use your own IP (x.x.x.x/32). Opening SSH to the whole internet is not allowed."
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

variable "auto_shutdown_time" {
  type        = string
  description = "Daily deallocation time (HHmm) in Tokyo time. Saves compute cost overnight."
  default     = "2300"
}
