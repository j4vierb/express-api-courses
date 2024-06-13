import express from 'express';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const port = 3003;

app.disable('x-powered-by');
app.use(express.json());

// logging midleware
app.use((req, res, next) => {
  console.log(`[${req.method}]@[${req.hostname}] to '${req.path}'`);
  next();
});

app.get('/', (req, res) => {
  res.json({message: 'ok'});
});

app.use('/students', studentRoutes);

app.use((req, res) => {
  res.status(404).send('<h1>404 Not Found</h1>');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
