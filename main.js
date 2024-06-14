import express from 'express';
import studentRoutes from './routes/student.js';
import getCorsOptions from './middleware/cors.js';
import loggingMiddleware from './middleware/logging.js';

const app = express();
const PORT = process.env.PORT || 3003;

app.disable('x-powered-by');

// Midlewares
app.use(express.json());
// logging midleware
app.use(loggingMiddleware);
// if is neccesary to allow all origin just remove the
// cors options object
app.use(getCorsOptions());

app.get('/', (req, res) => {
  res.json({message: 'ok'});
});

app.use('/students', studentRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
