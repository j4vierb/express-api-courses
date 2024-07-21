import { CourseStudentService } from '../services/courseStudent.js';

export class CourseStudentModel {
  static courseStudentService = CourseStudentService;

  static async getCourseStudents({ course_id }) {
    return await this.courseStudentService.getCourseStudents({ course_id });
  }

  static async getStudentCourse({ student_id, course_id }) {
    return await this.studentCourseService.getStudentCourse({ student_id, course_id });
  }
}