import express from 'express';
import cors from 'cors';
import studentRoutes from './routes/studentRoutes.js';

const app = express();
const port = 3003;

app.disable('x-powered-by');
app.use(express.json());

// logging midleware
app.use((req, res, next) => {
  console.log(`[${req.method}]@[${req.hostname}] to '${req.path}' from '${req.ip}'`);
  next();
});

// if is neccesary to allow all origin just remove the
// cors options object
app.use(cors({
  origin: (origin, callback) => {
    const ACEPTED_ORIGINS = [
      'http://localhost:3000'
    ];

    // if ! origin be cause if the request is from the same server
    // the header origin doesn't exists
    if(!origin || ACEPTED_ORIGINS.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('ERROR: Not allowed by CORS');
    }
  }
}));

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
