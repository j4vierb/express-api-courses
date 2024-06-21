const createLoggingMiddleware = () => {
  return (req, res, next) => {
    console.log(`[${req.method}]@[${req.hostname}] to '${req.path}' from '${req.ip}'`);
    next();
  }
};

export default createLoggingMiddleware;