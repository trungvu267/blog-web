const errorHandler = (err, req, res, next) => {
  // Default HTTP status code is 500 (Internal Server Error)
  const statusCode = err.statusCode || 500;

  // Default error message
  const message = err.message || "Something went wrong";
  console.log(message);
  // Send error message as JSON response
  res.status(statusCode).json({ message });
};
export default errorHandler;
