const createLoggingMiddleware = () => {
  return (req, res, next) => {
    console.log(`[${req.method}]@[${req.hostname}] to '${req.path}'`);
    next();
  }
};

export default createLoggingMiddleware;