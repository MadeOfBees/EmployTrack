USE emp_db;

INSERT INTO department (name)
VALUES
("Sales"),
("Marketing"),
("Engineering");
INSERT INTO role (title,salary,department_id)
VALUES
("Marketing head", 25234,2),
("Engineering head", 3546346,3),
("Sales head", 3242,1),
("Sales person", 999999999,1);
INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES
("Dave", "Davidson", 3,NULL),
("Mark", "Smith", 2,NULL),
("Kevin", "Wu", 1,NULL),
("Sam", "Ross", 1,3)

