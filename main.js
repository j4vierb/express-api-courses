import express from 'express';

import getCorsOptions from './middlewares/cors.js';
import createLoggingMiddleware from './middlewares/logging.js';

import { createStudentRouter } from './routes/student.js';
import { createCourseRouter } from './routes/course.js';

import { CourseModel } from './models/course.js';
import { StudentModel } from './models/student.js';

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

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
