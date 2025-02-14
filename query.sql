-- Active: 1737689992095@@127.0.0.1@3306@onlineedu
CREATE DATABASE onlineedu;

show tables;

INSERT INTO users (firstName, lastName, email, password, year, role, exprience, image, createdAt, updatedAt) 
VALUES 
('John', 'Doe', 'john.doe@example.com', 'hashed_password_1', 2020, 'teacher', 5, 'john.jpg', NOW(), NOW()),
('Jane', 'Smith', 'jane.smith@example.com', 'hashed_password_2', 2018, 'teacher', 7, 'jane.jpg', NOW(), NOW()),
('Alice', 'Johnson', 'alice.johnson@example.com', 'hashed_password_3', 2019, 'teacher', 4, 'alice.jpg', NOW(), NOW());
