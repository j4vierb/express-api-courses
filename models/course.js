import { CourseService } from "../services/course.js";

/**
 * Course model, all the static async methods use objects as a params
 * to pass multiple arguments.
 * 
 * **Note:** The validations of the consistance
 * and data integrity of the data should to be here. Also,
 * the validations of the negociation rules.
 */
export class CourseModel {
  // Provides access to CourseService methods in the model
  // throw the static courseService property. Using something
  // similar to dependency injection.
  static courseService = CourseService;

  /**
   * Method to use the CourseService method to get all the courses.
   * 
   * @returns A promise with the courses if they exists, an empty array otherwise.
   */
  static async getCourses() {
    return await this.courseService.getCourses();
  }

  /**
   * Method to get a course from the database.
   * 
   * @param {*} param0 
   * @returns A promise with the course if it exists, an empty array otherwise.
   */
  static async getCourse({ id }) {
    return await this.courseService.getCourse({ id });
  }

  /**
   * Method to create a course in the database.
   * 
   * @param {*} param0 
   * @returns Returns an object with the property created,
   *          it is true if the course was created, false otherwise.
   */
  static async createCourse({ name }) {
    const response = await this.courseService.createCourse({ name });
    if(response.error)
      return response;

    return response;
  }

  static async updateCourse({ id, name }) {
    const response = await this.courseService.updateCourse({ id, name });
    if(!response)
      return { error: 'Course not updated' };

    return { id, name };
  }

  static async deleteCourse({ id }) {
    const response = await this.courseService.deleteCourse({ id });

    if(!response)
      return { error: 'Course not deleted' };

    return { message: 'Course deleted' };
  }
}