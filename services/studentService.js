import validateStudent from '../schemas/studentSchema.js';
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

async function createStudent({ name, surname, unique_code}) {
  const result = validateStudent({ name, surname, unique_code });

  if(result.error) {
    return { error: result.error };
  }

  const { insertId, affectedRows } = await db.query(
    `INSERT INTO student (name, surname, unique_code) VALUES (?, ?, ?);`,
    [name, surname, unique_code]
  );
  let message = 'Error in creating student';

  if (affectedRows) {
    message = 'Student created successfully';
  }

  return { insertId, name, surname, unique_code };
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

async function updateStudent({ name, surname, unique_code }, id) {
  const validationResult = validateStudent({ name, surname, unique_code });

  /* TODO: this validations should to be in studentRoutes? */
  if(!validationResult.success) {
    return { error: validationResult.error };
  }

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
