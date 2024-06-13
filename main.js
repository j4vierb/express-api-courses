import express from 'express';
const app = express();
const port = 3003;

import studentRoutes from './routes/studentRoutes.js';

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
