drop database if exists notes_list;

create database if not exists notes_list;

use notes_list;

create table if not exists users(
  user_id int not null auto_increment,
  name varchar(25) not null,
  email varchar(30) not null,
  password varchar(30) not null,
  primary key(user_id)
);

create table if not exists notes(
  note_id int not null auto_increment,
  title varchar(30) not null,
  body varchar(255),
  user int not null,
  primary key(note_id),
  foreign key(user) references users(user_id)
);
