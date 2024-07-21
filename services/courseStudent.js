import db from './db.js';

export class CourseStudentService {
  /**
   * Get the courses of some student
   * 
   * @returns Returns the students enrolled in some course
   */
  static async getCourseStudents({ course_id }) {
    const result = await db.query(`
      SELECT CONCAT(STUDENT.name, ' ', STUDENT.surname) AS complete_name, STUDENT.unique_code FROM STUDENT
      JOIN STUDENT_COURSE ON STUDENT_COURSE.student_id = STUDENT.id
      JOIN COURSE ON STUDENT_COURSE.course_id = COURSE.course_id
      WHERE STUDENT.id = ?;
    `, [course_id]);

    if(!result)
      return [];

    return result;
  }

  /**
   * Get a particular course from a student
   * 
   * @param {*} object Object with the student_id and course_id
   * @returns Returns the course of the student if exists
   */
  static async getCourseStudent({ student_id, course_id }) {
    const result = await db.query(`
      SELECT COURSE.course_id, COURSE.name FROM STUDENT
      JOIN STUDENT_COURSE ON STUDENT_COURSE.student_id = STUDENT.id
      JOIN COURSE ON STUDENT_COURSE.course_id = COURSE.course_id
      WHERE STUDENT.id = ? AND COURSE.course_id = ?;
    `, [student_id, course_id]);

    if(result.length === 0)
      return { error: 'Student or course not found!' };

    return result[0];
  }
}
