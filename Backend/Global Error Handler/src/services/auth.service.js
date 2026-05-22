const UserModel = require("../models/user.model");
const ApiError = require("../utils/apiError");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

// in the same way we can create loginService and generateRefreshTokenService
const registerService = async (data) => {
  const { username, email, password, mobile, role } = data;

  if (!username || !email || !password || !mobile)
    throw new ApiError(400, "All fields are required.");

  const isExists = await UserModel.findOne({ email });

  if (isExists) throw new ApiError(409, "User already Exists.");

  const newUser = await UserModel.create({
    username,
    email,
    password,
    mobile,
    role,
  });

  const accessToken = generateAccessToken(newUser._id);
  const refreshToken = generateRefreshToken(newUser._id);

  newUser.refreshToken = refreshToken; //yaha pe hum newUser ko update kr diya hai toh agli step mey hume vo update krna padhega by save()
  await newUser.save(); // ye krna padta hai
  return { accessToken, refreshToken, newUser };
};

module.exports = { registerService };
