import db from './db.js';

/**
 * Class representing a course service.
 * 
 * @author j4vierb
 */
export class CourseService {
  /**
   * This functions gets all the courses from the database.
   * 
   * @returns Returns an array of courses if they exist, an empty array otherwise.
   */
  static async getCourses() {
    const result = await db.query(
      `SELECT * FROM course;`
    );

    const data = !result ? [] : result;
    return data;
  }

  /**
   * This function gets a course from the database.
   * 
   * @param {*} param0 
   * @returns Returns the course if it exists, an empty array otherwise.
   */
  static async getCourse({ id }) {
    const result = await db.query(
      `SELECT * FROM course WHERE course_id = ?;`,
      [id]
    );

    const data = !result ? [] : result[0];
    return data;
  }

  /**
   * This function creates an course in the database.
   * 
   * @param {*} param0 
   * @returns Returns the course if the course was created, an empty object otherwise.
   */
  static async createCourse({ name }) {
    const { affectedRows, insertId } = await db.query(
      `INSERT INTO course (name) VALUES (?);`,
      [name]
    );

    if(!affectedRows) {
      return { error: 'Course not created' };
    }

    return { id: insertId, name };
  }

  /**
   * This function updates a course in the database.
   * 
   * @param {*} param0 
   * @returns Returns true if the course was updated, false otherwise.
   */
  static async updateCourse({ id, name }) {
    const result = await db.query(
      `UPDATE course SET name = ? WHERE course_id = ?;`,
      [name, id]
    );

    if(!result.affectedRows) 
      return false;

    return true;
  }

  /**
   * This functions deletes a course from the database.
   * 
   * @param {*} param0 
   * @returns True if the course was deleted, false otherwise.
   */
  static async deleteCourse({ id }) {
    const result = await db.query(
      'DELETE FROM course WHERE course_id = ?;',
      [id]
    );

    if(!result.affectedRows)
      return false;

    return true;
  }
}