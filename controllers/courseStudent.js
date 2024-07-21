export class CourseStudentController {
  constructor({ courseStudentModel }) {
    this.courseStudentModel = courseStudentModel;
  }

  getCourseStudents = async (req, res) => {
    const { course_id } = req.params;
    const students = await this.courseStudentModel.getCourseStudents({ course_id });

    res.status(200).json(students);
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