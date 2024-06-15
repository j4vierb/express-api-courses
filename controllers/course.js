import { CourseModel } from '../models/course.js';

export class CourseController {
  static async getCourses(req, res) {
    const students = await CourseModel.getCourses();
  
    res.status(200).json(students);
  }

  static async getCourse(req, res) {
    const { id } = req.params;
    const student = await CourseModel.getCourse({ id });
  
    res.status(200).json(student);
  }

  static async createCourse(req, res) {
    const { name } = req.body;
  
    const result = validateCourse({ name });
  
    if(!result.success) {
      return res.status(400).json(result.error);
    }
  
    const student = await CourseModel.createCourse({ name });
  
    res.status(201).json(student);
  }

  static async updateCourse(req, res) {
    const { id } = req.params;
    const { name } = req.body;
  
    const result = validatePartialCourse({ name });
  
    if(!result.success) {
      return res.status(400).json(result.error);
    }
  
    const student = await CourseModel.updateCourse({ id, name });
  
    res.status(200).json(student);
  }

  static async deleteCourse(req, res) {
    const { id } = req.params;
    const student = await CourseModel.deleteCourse({ id });
  
    res.status(200).json(student);
  }
}