import express from 'express';
import { CourseController } from '../controllers/course.js';

export const createCourseRouter = ({ courseModel }) => {
  const courseRouter = express.Router();
  const courseController = new CourseController({ courseModel });

  courseRouter.get('/', courseController.getCourses);
  courseRouter.post('/', courseController.createCourse);

  courseRouter.get('/:id', courseController.getCourse);
  courseRouter.put('/:id', courseController.updateCourse);
  courseRouter.delete('/:id', courseController.deleteCourse);

  return courseRouter;
}
