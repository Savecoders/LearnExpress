// Error handler middleware
function logErrors(err, req, res, next) {
  console.error(err);
  // pass the error to the next middleware
  // next() is a function that calls the next middleware
  next(err);
}

function errorHandler(err, req, res, next) {
  // error 500 is internal server error
  // error 404 is a not found error
  res.status(500).send({
    message: err.message,
    stack: err.stack,
  });
}

// cannot set headers after they are sent to the client

// boom error handler using err.isBoom
function boomErrorHandler(err, req, res, next) {
  if (err.isBoom) {
    // boom save information about the error in the output property
    const { output } = err;
    // output.statusCode is the status code of the error (dinamic property)
    res.status(output.statusCode).json(output.payload);
  } else {
    // pass the error to the next middleware
    next(err);
  }
}

export { logErrors, errorHandler, boomErrorHandler };
