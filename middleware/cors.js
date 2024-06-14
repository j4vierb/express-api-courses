import cors from 'cors';

const ACCEPTED_ORIGINS = [
  'http://localhost:3000'
];

const getCorsOptions = ({ acceptedOrigins = ACCEPTED_ORIGINS} = {}) => cors({
  origin: (origin, callback) => {
    // if ! origin be cause if the request is from the same server
    // the header origin doesn't exists
    if(!origin || acceptedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback('ERROR: Not allowed by CORS');
    }
  }
});

export default getCorsOptions;
