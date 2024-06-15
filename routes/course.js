import express from 'express';
import { CourseController } from '../controllers/course.js';

const studentRouter = express.Router();

studentRouter.get('/', CourseController.getCourses);

studentRouter.get('/:id', CourseController.getCourse);

studentRouter.post('/', CourseController.createCourse);

studentRouter.put('/:id', CourseController.updateCourse);

studentRouter.delete('/:id', CourseController.deleteCourse);

export default studentRouter;
