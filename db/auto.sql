create database dbauto;
show databases;
use dbauto;
create table usuario(
	idusuario int primary key auto_increment,
    nome varchar(50) not null,
    telefone varchar(15) not null,
    email varchar(50) not null
);
show tables;
describe usuario;