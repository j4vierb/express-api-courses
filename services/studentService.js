import db from './db.js';

async function getStudents() {
  const rows = await db.query(
    `SELECT * FROM student;`
  );
  const data = !rows ? [] : rows;
  return data;
}

async function getStudent(id) {
  const rows = await db.query(
    `SELECT * FROM student WHERE id = ?;`,
    [id]
  );
  const data = !rows ? null : rows[0];
  return data;
}

async function createStudent({ id, name, surname, unique_code}) {
  const result = await db.query(
    `INSERT INTO student (id, name, surname, unique_code) VALUES (?, ?, ?, ?);`,
    [id, name, surname, unique_code]
  );
  let message = 'Error in creating student';

  if (result.affectedRows) {
    message = 'Student created successfully';
  }

  return { id, name, surname, unique_code };
}

async function deleteStudent(id) {
  const result = await db.query(
    `DELETE FROM student WHERE id = ?;`,
    [id]
  );

  let message = 'Error in deleting student';
  if(result.affectedRows) {
    message = 'Student deleted successfully';
  }
  return { message };
}

async function updateStudent({ id, name, surname, unique_code }) {
  const result = await db.query(
    `UPDATE student SET name = ?, surname = ?, unique_code = ? WHERE id = ?;`,
    [name, surname, unique_code, id]
  );

  let message = 'Error in updating student';
  if(result.affectedRows) {
    message = 'Student updated successfully';
  }
  return { id, name, surname, unique_code };
};

export default { getStudents, getStudent, createStudent, deleteStudent, updateStudent };
