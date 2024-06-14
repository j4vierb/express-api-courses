import express from 'express';
const router = express.Router();

import studentService from '../services/student.js';

router.get('/', async function(req, res, next) {
  try {
    res.json(await studentService.getStudents());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

router.get('/:id', async function(req, res, next) {
  try {
    res.json(await studentService.getStudent(req.params.id));
  } catch (err) {
    console.error(`Error while getting programming language `, err.message);
    next(err);
  }
});

router.post('/', async function(req, res, next) {
  try {
    res.json(await studentService.createStudent(req.body));
  } catch(err) {
    console.error(`Error while creating programming language `, err.message);
    next(err);
  }
});

router.delete('/:id', async function(req, res, next) {
  try {
    res.json(await studentService.deleteStudent(req.params.id));
  } catch(err) {
    console.error(`Error while deleting programming language `, err.message);
    next(err);
  }
});

router.put('/:id', async function(req, res, next) {
  const { id } = req.params;

  try {
    res.json(await studentService.updateStudent(req.body, id));
  } catch(err) {
    console.error(`Error while updating programming language `, err.message);
    next(err);
  }
});

export default router;
