export class StudentCourseController {
  constructor({ studentCourseModel }) {
    this.studentCourseModel = studentCourseModel;
  }

  getStudentCourses = async (req, res) => {
    const { student_id } = req.params;
    const courses = await this.studentCourseModel.getStudentCourses({ student_id });

    res.status(200).json(courses);
  }

  getStudentCourse = async (req, res) => {
    const { student_id, course_id } = req.params;
    const course = await this.studentCourseModel.getStudentCourse({ student_id, course_id });

    if (course.error) {
      res.status(404).json(course);
      return;
    }

    res.status(200).json(course);
  }
}