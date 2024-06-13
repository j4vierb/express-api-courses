import express from 'express';
const router = express.Router();

import studentService from '../services/studentService.js';

router.get('/', async function(req, res, next) {
  try {
    res.json(await studentService.getStudents());
  } catch (err) {
    console.error(`Error while getting programming languages `, err.message);
    next(err);
  }
});

export default router;
