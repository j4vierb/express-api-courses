import db from './db.js';

export class CourseService {
  static async getCourses() {
    const rows = await db.query(
      `SELECT * FROM course;`
    );

    const data = !rows ? [] : rows;
    return data;
  }
}