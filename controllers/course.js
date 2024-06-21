import validate from '../schemas/course.js';

/**
 * Class representing a course controller. Uses the
 * design pattern dependency injection to inject the
 * course model into the controller.
 * 
 * **note:** The "methods" of this class are really
 * properties with functions assigned to them.
 * 
 * **note 2:** The controller should to verify the 
 * parameters passed throw the request.body.
 * 
 * @author j4vierb
 */
export class CourseController {
  /**
   * Constructor to inject the model throw dependency
   * injection design pattern.
   * 
   * @param {*} object Object that includes the courseModel 
   */
  constructor({ courseModel }) {
    this.courseModel = courseModel;
  }
  
  /**
   * Property that is a function that retrieve the courses if there
   * exists or an object with the error property
   */
  getCourses = async (req, res) => {
    const courses = await this.courseModel.getCourses();

    res.status(200).json(courses);
  }

  /**
   * Property that is a function that retrieve a course if there
   * exists or an object with the error property.
   */
  getCourse = async (req, res) => {
    const { id } = req.params;
    const course = await this.courseModel.getCourse({ id });
  
    if(course.error) {
      res.status(404).json(course);
      return;
    }

    res.status(200).json(course);
  }

  createCourse = async (req, res) => {
    const { name } = req.body;
  
    const result = validate.validateCourse({ name });
    if(!result.success) {
      res.status(400).json(result.error);
      return;
    }
  
    const course = await this.courseModel.createCourse({ name });
    if(course.error) {
      res.status(400).json(course);
      return;
    }
  
    res.status(201).json(course);
  }

  updateCourse = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
  
    const result = validate.validatePartialCourse({ name });
    if(!result.success) {
      res.status(400).json(result.error);
      return;
    }
  
    const course = await this.courseModel.updateCourse({ id, name });
    if(course.error) {
      res.status(400).json(course);
      return;
    }

    res.status(200).json(course);
  }

  deleteCourse = async (req, res) => {
    const { id } = req.params;

    const course = await this.courseModel.deleteCourse({ id });
    if(course.error) {
      res.status(400).json(course);
      return;
    }

    res.status(200).json(course);
  }
}