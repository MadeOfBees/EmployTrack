CREATE DATABASE emp_db;
USE emp_db;
CREATE TABLE department(
    id INT PRIMARY KEY AUTO_INCREMENT,
    name varchar(30)
);
CREATE TABLE role(
    id INT PRIMARY KEY AUTO_INCREMENT,
    title varchar(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) ON DELETE CASCADE
);
CREATE TABLE employee(
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name varchar(30),
    last_name varchar(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE,
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id) ON DELETE SET NULL
);