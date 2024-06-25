import { StudentCourseService } from '../services/studentCourse.js';

export class StudentCourseModel {
  static studentCourseService = StudentCourseService;

  static async getStudentCourses({ student_id }) {
    return await this.studentCourseService.getStudentCourses({ student_id });
  }

  static async getStudentCourse({ student_id, course_id }) {
    return await this.studentCourseService.getStudentCourse({ student_id, course_id });
  }
}