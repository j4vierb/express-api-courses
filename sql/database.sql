CREATE DATABASE COLLEGE;

USE COLLEGE;

CREATE TABLE STUDENT(
	id int not null,
  name varchar(80) not null,
  surname varchar(80) not null,
  unique_code varchar(80) not null,
  CONSTRAINT PK_STUDENT PRIMARY KEY (id)
);

INSERT INTO STUDENT VALUES
	(1, 'Pepito', 'Perez', '202224189'),
  (2, 'Anita', 'Florez', '202234598'),
  (3, 'Kah', 'Ala', '202215959');

SELECT * FROM STUDENT;

CREATE TABLE COURSE(
	course_id int auto_increment,
  name varchar(80) not null,
  constraint PK_COURSE PRIMARY KEY (course_id)
);

INSERT INTO COURSE VALUES
	(1, 'Pre-Cálculo'),
  (2, 'Cálculo diferencial'),
  (3, 'Álgebra lineal'),
  (4, 'Cálculo vectorial'),
  (5, 'Cálculo integral'),
  (6, 'Ecuaciones diferenciales');

SELECT * FROM Course;
