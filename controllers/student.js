import validate from '../schemas/student.js'

export class StudentController {
  constructor({ studentModel }) {
    this.studentModel = studentModel;
  }

  getStudents = async (req, res) => {
    const students = await this.studentModel.getStudents();

    res.status(200).json(students);
  }

  getStudent = async (req, res) => {
    const { id } = req.params;
    const student = await this.studentModel.getStudent({ id });
  
    if(student.error) {
      res.status(404).json(student);
      return;
    }

    res.status(200).json(student);
  }

  createStudent = async (req, res) => {
    const { name, surname, unique_code } = req.body;
  
    const result = validate.validateStudent({ name, surname, unique_code });
    if(!result.success) {
      res.status(400).json(result.error);
      return;
    }
  
    const student = await this.studentModel.createStudent({ name, surname, unique_code });
    if(student.error) {
      res.status(400).json(student);
      return;
    }
  
    res.status(201).json(student);
  }

  updateStudent = async (req, res) => {
    const { id } = req.params;
    const { name, surname, unique_code } = req.body;
  
    const result = validate.validatePartialStudent({ name, surname, unique_code });
    if(!result.success) {
      res.status(400).json(result.error);
      return;
    }

    const student = await this.studentModel.updateStudent({ id, name, surname, unique_code });
    if(student.error) {
      res.status(400).json(student);
      return;
    }

    res.status(200).json(student);
  }

  deleteStudent = async (req, res) => {
    const { id } = req.params;

    const student = await this.studentModel.deleteStudent({ id });
    if(student.error) {
      res.status(400).json(student);
      return;
    }

    res.status(200).json(student);
  }
}