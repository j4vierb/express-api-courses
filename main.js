import express from 'express';

import getCorsOptions from './middlewares/cors.js';
import createLoggingMiddleware from './middlewares/logging.js';

import { createStudentRouter } from './routes/student.js';
import { createCourseRouter } from './routes/course.js';

import { CourseModel } from './models/course.js';
import { StudentModel } from './models/student.js';
import { createStudentCourseRouter } from './routes/studentCourse.js';
import { StudentCourseModel } from './models/studentCourse.js';
import { createCourseStudentRouter } from './routes/courseStudent.js';
import { CourseStudentModel } from './models/courseStudent.js';

const app = express();
const PORT = process.env.PORT || 3003;

app.disable('x-powered-by');

// Midlewares
app.use(express.json());
// logging midleware
app.use(createLoggingMiddleware());
// if is neccesary to allow all origin
// just remove the getCorsOptions function
app.use(getCorsOptions());

app.get('/', (req, res) => {
  res.json({message: 'ok'});
});

app.use('/students', createStudentRouter({ studentModel: StudentModel }));
app.use('/courses', createCourseRouter({ courseModel: CourseModel }));

app.use('/students', createStudentCourseRouter({ studentCourseModel: StudentCourseModel }))
app.use('/courses', createCourseStudentRouter({ courseStudentModel: CourseStudentModel }))

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
