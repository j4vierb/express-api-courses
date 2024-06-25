import { StudentCourseController } from "../controllers/studentCourse.js";
import express from "express";

export const createStudentCourseRouter = ({ studentCourseModel }) => {
  const router = express.Router();
  const studentCourseController = new StudentCourseController({ studentCourseModel });

  router.get("/:student_id/courses", studentCourseController.getStudentCourses);
  router.get("/:student_id/courses/:course_id", studentCourseController.getStudentCourse);

  return router;
}
