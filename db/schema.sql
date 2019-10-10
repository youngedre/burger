DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

use burger_db;

create table burgers(
    id int auto_increment,
    burger_name varchar(100) not null,
    devoured boolean default false,
    primary key (id)
)