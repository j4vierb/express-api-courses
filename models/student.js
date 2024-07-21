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
    const response = await this.studentService.getStudents();

    if(!response)
      return { error: 'No students found!' };

    return response;
  }

  static async getStudent({ id }) {
    const response = await this.studentService.getStudent({ id });
    
    if(response.length === 0)
      return { error: 'Student with the ID provided not found!' };
    
    return response[0];
  }

  static async createStudent({ name, surname, unique_code }) {
    const studentCodeIsUnique = await this.studentService.existsOtherStudentWithUniqueCode({ unique_code });
    if(!studentCodeIsUnique)
      return { error: 'There exists another student with the same unique code' };

    const response = await this.studentService.createStudent({ name, surname, unique_code });
    return response;
  }

  static async updateStudent({ id, name, surname, unique_code }) {
    const studentCodeIsUnique = await this.studentService.existsOtherStudentWithUniqueCode({ unique_code });
    if(!studentCodeIsUnique)
      return { error: 'There exists another student with the same unique code' }

    const studentExists = await this.studentService.getStudent({ id });
    if(studentExists.error)
      return { error: 'There isn\'t some student with the ID provided!' };

    return await this.studentService.updateStudent({id, name, surname, unique_code });
  }

  static async deleteStudent({ id }) {
    const studentExists = await this.studentService.getStudent({ id });
    if(studentExists.error)
      return { error: 'There isn\'t some student with the ID provided!' };

    return await this.studentService.deleteStudent({ id });
  }
}
