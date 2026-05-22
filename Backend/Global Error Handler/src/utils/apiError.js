class ApiError extends Error {
  constructor(statusCode, message) {
    super(message); // we use the Error class to show the stack trace
    this.statusCode = statusCode;
    this.message = message;
  }
}

module.exports = ApiError;