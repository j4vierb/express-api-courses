export class CourseStudentController {
  constructor({ courseStudentModel }) {
    this.courseStudentModel = courseStudentModel;
  }

  getCourseStudents = async (req, res) => {
    const { course_id } = req.params;
    const students = await this.courseStudentModel.getCourseStudents({ course_id });

    if (students.error) {
      res.status(404).json(students);
      return;
    }

    res.status(200).json(students);
  }

  getCourseStudent = async (req, res) => {
    const { student_id, course_id } = req.params;
    const student = await this.courseStudentModel.getCourseStudent({ student_id, course_id });

    if (student.error) {
      res.status(404).json(student);
      return;
    }

    res.status(200).json(student);
  }

  addCourseStudent = async (req, res) => {
    const { student_id, course_id } = req.params;
    const response = await this.courseStudentModel.addCourseStudent({ student_id, course_id });

    if (response.error) {
      res.status(400).json(response);
      return;
    }

    res.status(201).json(response);
  }

  deleteCourseStudent = async (req, res) => {
    const { student_id, course_id } = req.params;
    const response = await this.courseStudentModel.deleteCourseStudent({ student_id, course_id });

    if (response.error) {
      res.status(404).json(response);
      return;
    }

    res.status(200).json(response);
  }
}
