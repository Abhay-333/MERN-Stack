const jwt = require("jsonwebtoken");
const ApiError = require("../utils/apiError");
const UserModel = require("../models/user.model");

const authMiddleware = async (req, res, next) => {
  const { accessToken } = req.cookies;
  console.log(accessToken);

  if (!accessToken) throw new ApiError(401, "Unauthorized user");

  const decode = jwt.verify(accessToken, process.env.JWT_SECRET_ACCESS);

  if (!decode) {
    throw new ApiError(401, "Unauthorized user");
  }

  const user = await UserModel.findById(decode._id);

  req.user = user;
  res.send("User send from auth middleware to controller");
  next();
};

module.exports = authMiddleware;
