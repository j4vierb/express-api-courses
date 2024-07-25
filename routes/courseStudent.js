import { CourseStudentController } from "../controllers/courseStudent.js";
import express from "express";

export const createCourseStudentRouter = ({ courseStudentModel }) => {
  const router = express.Router();
  const courseStudentController = new CourseStudentController({ courseStudentModel });

  router.get("/:course_id/students", courseStudentController.getCourseStudents);
  router.get("/:course_id/students/:student_id", courseStudentController.getCourseStudent);
  router.post("/:course_id/students/:student_id", courseStudentController.addCourseStudent);
  router.delete("/:course_id/students/:student_id", courseStudentController.deleteCourseStudent);

  return router;
}
