variable "region" {
  default = "eu-west-1"
}

variable "instance_type" {
  default = "t3.micro"
}

variable "key_name" {
  description = "Existing AWS key pair name"
}

