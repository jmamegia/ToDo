CREATE DATABASE ng_todo_db;

USE ng_todo_db;

CREATE TABLE tasks (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY ,
    responsible VARCHAR(30),
    name VARCHAR(30),
    description VARCHAR(255),
    image VARCHAR(2000),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    priority INT(1) DEFAULT '3'
)