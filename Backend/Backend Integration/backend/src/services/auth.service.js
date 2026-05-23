const UserModel = require("../models/user.model");
const ApiError = require("../utils/apiError");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

const registerService = async (data) => {
  const { username, email, password, mobile } = data;

  if (!username || !email || !password || !mobile) {
    throw new ApiError(400, "All fields are required.");
  }

  const isExisted = await UserModel.findOne({ email });

  if (isExisted) {
    throw new ApiError(409, "User Already Exists.");
  }

  const newUser = await UserModel.create({
    username,
    email,
    password,
    mobile,
  });

  const accessToken = generateAccessToken(newUser._id);
  const refreshToken = generateRefreshToken(newUser._id);

  return { accessToken, refreshToken, newUser };
};

const loginService = async (data) => {
  const { email, password } = data;

  if (!email || !password) {
    throw new ApiError(400, "All fields are required.");
  }

  const isExisted = await UserModel.findOne({ email });

  if (!isExisted) {
    throw new ApiError(404, "User Not Found.");
  }

  const comparePass = isExisted.comparePassword(password);

  if (!comparePass) {
    throw new ApiError(401, "Invalid credentials.");
  }

  const accessToken = generateAccessToken(isExisted._id);
  const refreshToken = generateRefreshToken(isExisted._id);

  return { accessToken, refreshToken, isExisted };
};

module.exports = { registerService, loginService };
