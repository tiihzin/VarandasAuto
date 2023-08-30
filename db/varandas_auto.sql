create database varandas_auto;
use varandas_auto;

create table cliente (
id_cliente int primary key not null auto_increment,
nome varchar(45) not null,
telefone varchar(11) not null,
email varchar(45) not null,
senha varchar(20) not null,
ranking int not null
);

create table veiculo (
id_veiculo int primary key not null auto_increment,
fk_cliente int, foreign key (fk_cliente) references cliente (id_cliente),
montadora varchar(45) not null,
modelo varchar(45) not null,
ano_fabrica int not null
);

create table personalizacao(
id_personaliza int primary key not null auto_increment,
fk_cliente int, foreign key (fk_cliente) references cliente (id_cliente),
fk_veiculo int, foreign key (fk_veiculo) references veiculo (id_veiculo), 
dimensoes varchar(45) not null,
cor varchar(45) not null,
observacao text,
status_pedido int not null
);