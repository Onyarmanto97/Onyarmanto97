create database project_backend;
use project_backend;

CREATE TABLE `project_backend`.`merchant`(
`id` INT NOT NULL AUTO_INCREMENT ,
`password` VARCHAR(45) NOT NULL,
`name` VARCHAR(45) NOT NULL,
`address` VARCHAR(250) NOT NULL,
`join_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
`phone_number` VARCHAR(45) NULL,
PRIMARY KEY (`id`));

CREATE TABLE `project_backend`.`product`(
`id_product` VARCHAR(45) NOT NULL AUTO_INCREMENT,
`name` VARCHAR(45) NOT NULL,
`quantity` INT(5) NOT NULL,
`price` DECIMAL NOT NULL,
PRIMARY KEY (`id_product`));


