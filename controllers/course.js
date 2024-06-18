import validate from '../schemas/course.js';

/**
 * Class representing a course controller. Uses the
 * design pattern dependency injection to inject the
 * course model into the controller.
 * 
 * **note:** The "methods" of this class are really
 * properties with functions assigned to them.
 * 
 * @author j4vierb
 */
export class CourseController {
  constructor({ courseModel }) {
    this.courseModel = courseModel;
  }
  
  getCourses = async (req, res) => {
    const students = await this.courseModel.getCourses();
  
    res.status(200).json(students);
  }

  getCourse = async (req, res) => {
    const { id } = req.params;
    const student = await this.courseModel.getCourse({ id });
  
    res.status(200).json(student);
  }

  createCourse = async (req, res) => {
    const { name } = req.body;
  
    const result = validate.validateCourse({ name });
  
    if(!result.success) {
      return res.status(400).json(result.error);
    }
  
    const student = await this.courseModel.createCourse({ name });
  
    res.status(201).json(student);
  }

  updateCourse = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const result = validate.validatePartialCourse({ name });
  
    if(!result.success) {
      return res.status(400).json(result.error);
    }
  
    const student = await this.courseModel.updateCourse({ id, name });
  
    res.status(200).json(student);
  }

  deleteCourse = async (req, res) => {
    const { id } = req.params;
    const student = await this.courseModel.deleteCourse({ id });
  
    res.status(200).json(student);
  }
}