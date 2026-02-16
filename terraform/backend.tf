terraform {
  backend "s3" {
    bucket         = "motion-tf-state"
    key            = "dev/terraform.tfstate"
    region         = "eu-west-1"
    dynamodb_table = "motion-tf-locks"
    encrypt        = true
  }
}
