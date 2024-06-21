import { CourseService } from "../services/course.js";

/**
 * Course model, all the static async methods use objects as a params
 * to pass multiple arguments.
 * 
 * **Note:** The validations of the consistance
 * and data integrity of the data should to be here. Also,
 * the validations of the negociation rules.
 * 
 * @author j4vierb
 */
export class CourseModel {
  // Provides access to CourseService methods in the model
  // throw the static courseService property. Using something
  // similar to dependency injection.
  static courseService = CourseService;

  /**
   * Method to use the CourseService method to get all the courses.
   * 
   * @returns Returns an object in json format with the courses.
   */
  static async getCourses() {
    return await this.courseService.getCourses();
  }

  /**
   * Method to get a course from the database.
   * 
   * @param {*} object Object with the id to search in the database.
   * @returns Returns an object with the response from the service in
   *          json fromat.
   */
  static async getCourse({ id }) {
    return await this.courseService.getCourse({ id });
  }

  /**
   * Method to create a course in the database.
   * 
   * @param {*} object Object with the name to create the course. 
   * @returns Returns an object with the error property if something
   *          went wrong and the course if everything is ok.
   */
  static async createCourse({ name }) {
    const response = await this.courseService.createCourse({ name });

    return response;
  }

  /**
   * Method to update a course in the database.
   * 
   * @param {*} object Object withe the id and name to update the course. 
   * @returns Returns the repsonse in json format from the service.
   */
  static async updateCourse({ id, name }) {
    const response = await this.courseService.updateCourse({ id, name });

    return response;
  }

  /**
   * Method to delete a course in the database.
   * 
   * @param {*} object Object with the id to delete the course.
   * @returns Returns the response in json format from the service.
   */
  static async deleteCourse({ id }) {
    const response = await this.courseService.deleteCourse({ id });

    return response;
  }
}