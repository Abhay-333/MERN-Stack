const ApiError = require("../utils/apiError");

const errorMiddleware = (err, req, res, next) => {
  let message = err.message || "Internal Server Error";
  let statusCode = err.statusCode || 500;
  let errors = null;

  if (err.name === "ValidationError") {
    statusCode = 400;
    message = "Validation failed";
    errors = Object.fromEntries(
      Object.entries(err.errors).map(([field, value]) => [field, value.message]),
    );
  }

  res.status(statusCode).json({ success: false, message, errors });
};

module.exports = errorMiddleware;
