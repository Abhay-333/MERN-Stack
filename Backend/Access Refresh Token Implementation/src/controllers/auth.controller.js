const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");

const registerController = async (req, res) => {
  const { username, email, password, mobile, role } = req.body;

  try {
    if (!username || !email || !password || !mobile)
      return res.status(400).json({ message: "All fields are required." });

    const isExists = await UserModel.findOne({ email });

    if (isExists)
      return res.status(409).json({ message: "Email already exists." });

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

    res.cookie("accessToken", accessToken, {
      httpOnly: true, // this object gives our cookie storage more security securing attacks from XSS->document.cookies se attack and CSRF->frontend ke url se attack
      // secure: true,
      // sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("accessToken", accessToken, {
      httpOnly: true, // this object gives our cookie storage more security securing attacks from XSS->document.cookies se attack and CSRF->frontend ke url se attack
      // secure: true,
      // sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .status(201)
      .json({ message: "User Created Successfully.", user: newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const loginController = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password)
      return res.status(400).json({ message: "All fields are required." });

    const isExists = await UserModel.findOne({ email });

    if (!isExists)
      return res.status(404).json({ message: "User email not found." });

    const comparePassword = isExists.comparePassword(password);
    if (!comparePassword)
      return res.status(401).json({ message: "Invalid Password." });

    // this is a singleton token technique
    const token = isExists.generateJWT();
    res.cookie("log_token", token);
    return res
      .status(201)
      .json({ message: "User LoggedIn Successfully.", user: isExists });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { registerController, loginController };
