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
