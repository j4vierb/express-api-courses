import { CourseService } from "../services/course.js";

/**
 * Course model, all the static async methods use objects as a params
 * to pass multiple arguments.
 * 
 * **Note:** The validations of the consistance
 * and data integrity of the data should to be here.
 */
export class CourseModel {
  // Dependency injection
  static courseService = CourseService;

  static async getCourses() {
    return this.courseService.getCourses();
  }

  static async getCourse({ id }) {
    return {};
  }

  static async createCourse({ name }) {
    return {};
  }

  static async updateCourse({ id, name }) {
    return {};
  }

  static async deleteCourse({ id }) {
    return {};
  }
}