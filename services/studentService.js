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

  return { message };
}

export default { getStudents, getStudent, createStudent };
