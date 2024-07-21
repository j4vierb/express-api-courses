import { CourseStudentController } from "../controllers/courseStudent.js";
import express from "express";

export const createCourseStudentRouter = ({ courseStudentModel }) => {
  const router = express.Router();
  const courseStudentController = new CourseStudentController({ courseStudentModel });

  router.get("/:course_id/students", courseStudentController.getCourseStudents);
  //router.get("/:student_id/courses/:course_id", courseStudentController.getStudentCourse);

  return router;
}
