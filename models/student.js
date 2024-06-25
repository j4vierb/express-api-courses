import { StudentService } from '../services/student.js';

/**
 * Injects the service through the constructor using
 * dependency injection.
 * 
 * @author j4vierb
 */
export class StudentModel {
  static studentService = StudentService;

  static async getStudents() {
    return await this.studentService.getStudents();
  }

  static async getStudent({ id }) {
    return await this.studentService.getStudent({ id });
  }

  static async createStudent({ name, surname, unique_code }) {
    return await this.studentService.createStudent({ name, surname, unique_code });
  }

  static async updateStudent({ id, name, surname, unique_code }) {
    return await this.studentService.updateStudent({id, name, surname, unique_code });
  }

  static async deleteStudent({ id }) {
    return await this.studentService.deleteStudent({ id });
  }
}
