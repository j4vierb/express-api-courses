import { CourseStudentService } from '../services/courseStudent.js';
import { CourseService } from '../services/course.js';

export class CourseStudentModel {
  static courseStudentService = CourseStudentService;
  static courseService = CourseService;

  static async getCourseStudents({ course_id }) {
    const res = await this.courseService.getCourse({ id: course_id });

    if(!res)
      return { error: 'Course not found!' };

    const response = await this.courseStudentService.getCourseStudents({ course_id });

    if(response.length === 0)
      return { error: 'No students found!' };

    return response;
  }

  static async getCourseStudent({ student_id, course_id }) {
    const res = await this.courseService.getCourse({ id: course_id });
    if(!res)
      return { error: 'Course not found!' };
    
    const response = await this.courseStudentService.getCourseStudent({ student_id, course_id });
    if(response.error)
      return { error: 'Student not enrolled in this course!' };

    return response;
  }

  static async addCourseStudent({ student_id, course_id }) {
    const response = await this.courseStudentService.getCourseStudent({ student_id, course_id });

    if(!response.error)
      return { error: 'Student already enrolled in this course!' };

    const res = await this.courseStudentService.addCourseStudent({ student_id, course_id });
    if(res.affectedRows === 0)
      return { error: 'Student not enrolled in this course!' };

    return { success: 'Student enrolled in this course!' };
  }

  static async deleteCourseStudent({ student_id, course_id }) {
    const response = await this.courseStudentService.getCourseStudent({ student_id, course_id });

    if(response.error)
      return { error: 'Student not enrolled in this course!' };

    const res = await this.courseStudentService.deleteCourseStudent({ student_id, course_id });
    if(res.affectedRows === 0)
      return { error: 'Student not enrolled in this course!' };

    return { success: 'Student unenrolled from this course!' };
  }
}