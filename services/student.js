import db from './db.js';

/**
 * Class representing a student service. This class should
 * to provide methods to the Model to validate the business
 * rules.
 * 
 * TODO: The validations in this service should to be in the
 * model, this with the finallity to separate the responsabilities
 * and decouple the code.
 * 
 * @author j4vierb
 */
export class StudentService {
  static async getStudents() {
    const result = await db.query(
      `SELECT * FROM student;`
    );

    return result;
  }

  static async getStudent({ id }) {
    const result = await db.query(
      `SELECT * FROM student WHERE id = ?;`,
      [id]
    );
    
    return result;
  }

  static async createStudent({ name, surname, unique_code }) {
    const { insertId, affectedRows } = await db.query(
      `INSERT INTO student (name, surname, unique_code) VALUES (?, ?, ?);`,
      [name, surname, unique_code]
    );

    if (!affectedRows) {
      return { error: 'Student not created!' }
    }

    return { id: insertId, name, surname, unique_code };
  }

  static async updateStudent({ id, name, surname, unique_code }) {  
    const result = await db.query(
      `UPDATE student SET name = ?, surname = ?, unique_code = ? WHERE id = ?;`,
      [name, surname, unique_code, id]
    );

    if(!result.affectedRows)
      return { error: 'Student not updated!' }

    return { id, name, surname, unique_code };
  };

  static async deleteStudent({ id }) {
    const result = await db.query(
      `DELETE FROM student WHERE id = ?;`,
      [id]
    );

    if(!result.affectedRows)
      return { error: 'Student not deleted!' };

    return { message: 'The student was deleted!' };
  }

  static async existsOtherStudentWithUniqueCode({ unique_code }) {
    const result = await db.query(
      `SELECT * FROM student WHERE unique_code = ?;`,
      [unique_code]
    );

    return result.length === 0;
  }
}