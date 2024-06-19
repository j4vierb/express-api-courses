import db from './db.js';

/**
 * Class representing a course service. This class should
 * to provide methods to the Model to validate the business
 * rules.
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

    if(!result)
      return [];
  
    return result;
  }

  /**
   * This function gets a course from the database.
   * 
   * @param {*} object An object with the id of the course. 
   * @returns Returns the course if it exists, an empty array otherwise.
   */
  static async getCourse({ id }) {
    const result = await db.query(
      `SELECT * FROM course WHERE course_id = ?;`,
      [id]
    );

    if(result.length === 0)
      return { error: 'Course with the ID provided not found!' };

    return result[0];
  }

  /**
   * This function creates an course in the database.
   * 
   * @param {*} object An object with the name. 
   * @returns Returns the course if the course was created, an empty object otherwise.
   */
  static async createCourse({ name }) {
    const existsOtherCourse = await this.existsOtherCourse({ name });
    if(existsOtherCourse)
      return { error: 'There exists another course with the same name' }

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
   * @param {*} object An object with the id and name property to update the course. 
   * @returns Returns true if the course was updated, false otherwise.
   */
  static async updateCourse({ id, name }) {
    const existsOtherCourse = await this.existsOtherCourse({ name });
    if(existsOtherCourse)
      return { error: 'There exists another course' }

    const uniqueId = await this.getCourse({ id });
    if(uniqueId.error)
      return { error: 'The course id doesn\'t exists!'}

    const result = await db.query(
      `UPDATE course SET name = ? WHERE course_id = ?;`,
      [name, id]
    );

    if(!result.affectedRows) 
      return { error: 'Course not updated!' };

    return { id, name };
  }

  /**
   * This functions deletes a course from the database.
   * 
   * @param {*} object An object with the id course to delete it. 
   * @returns True if the course was deleted, false otherwise.
   */
  static async deleteCourse({ id }) {
    const uniqueId = await this.getCourse({ id });
    if(uniqueId.error)
      return { error: 'The course id doesn\'t exists!'}

    const result = await db.query(
      'DELETE FROM course WHERE course_id = ?;',
      [id]
    );

    if(!result.affectedRows)
      return { error: 'Course not deleted!' };

    return { message: 'The course was deleted!' };
  }

  /**
   * This functions validates if there is another course
   * with the same name passed as parameter.
   * 
   * @param {*} object Object with the name of the course
   * @returns Returns true if there exists another course, false otherwise
   */
  static async existsOtherCourse({ name }) {
    const result = await db.query(
      'SELECT * FROM course WHERE name = ?;',
      [name]
    );

    if(result.length === 0)
      return false;

    return true;
  }
}
