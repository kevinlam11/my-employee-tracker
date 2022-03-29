USE employees_db;

INSERT INTO department (name)
VALUES 
('Engineering'),
('Math'),
('Science'),
('History'),
('English');

INSERT INTO role (title, salary, department_id)
VALUES
('Engineer',100000,1),
('Math Teacher',30000,2),
('Science Teacher',20000,3),
('History Teacher',20000,4),
('English Teacher',25000,5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('Justin','Credible',1,NULL),
('Claire','Annette',4,1),
('Anita','Hero',3,2),
('Amanda','Tory',5,3),
('Diya','Bolical',2,4);
