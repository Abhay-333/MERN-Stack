// requestHandler here is treated like a normal function but we want that requestHandler should behave like a controller thats why we made a middleware here
const asyncHandler = (requestHandler) => {
  return (req, res, next) => {
    // middleware
    // here the concept of closure is used
    Promise.resolve(requestHandler(req, res)).catch((error) => next(error)); // we can also give next() as argument in requestHandler
  };
};

module.exports = asyncHandler;
