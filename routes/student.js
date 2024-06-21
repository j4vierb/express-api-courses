import express from 'express';
import { StudentController } from '../controllers/student.js';

export const createStudentRouter = ({ studentModel }) => {
  const router = express.Router();
  const studentController = new StudentController({ studentModel });

  router.get('/', studentController.getStudents);
  router.post('/', studentController.createStudent);

  router.get('/:id', studentController.getStudent);
  router.delete('/:id', studentController.deleteStudent);
  router.put('/:id', studentController.updateStudent);

  return router;  
}
