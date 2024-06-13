import db from './db.js';

async function getStudents() {
  const rows = await db.query(
    `SELECT * FROM student;`
  );
  const data = !rows ? [] : rows;
  return data;
}

export default { getStudents };
