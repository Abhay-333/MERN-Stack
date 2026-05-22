const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { generateAccessToken, generateRefreshToken } = require("../utils/token");
const { registerService } = require("../services/auth.service");

const registerController = async (req, res) => {
  const { username, email, password, mobile, role } = req.body;
  const { accessToken, refreshToken, newUser } = await registerService(
    req.body,
  );
  
  try {
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // this object gives our cookie storage more security securing attacks from XSS->document.cookies se attack and CSRF->frontend ke url se attack
      // secure: true,
      // sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
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

    // const comparePassword = isExists.comparePassword(password);
    // if (!comparePassword)
    //   return res.status(401).json({ message: "Invalid Password." });

    const accessToken = generateAccessToken(isExists._id);
    const refreshToken = generateRefreshToken(isExists._id);

    isExists.refreshToken = refreshToken;
    await isExists.save();
    res.cookie("accessToken", accessToken, {
      httpOnly: true, // this object gives our cookie storage more security securing attacks from XSS->document.cookies se attack and CSRF->frontend ke url se attack
      // secure: true,
      // sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    res.cookie("refreshToken", refreshToken, {
      httpOnly: true, // this object gives our cookie storage more security securing attacks from XSS->document.cookies se attack and CSRF->frontend ke url se attack
      // secure: true,
      // sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });

    return res
      .status(201)
      .json({ message: "User LoggedIn Successfully.", user: isExists });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const getRefreshController = async (req, res) => {
  try {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken)
      return res.status(400).json({ message: "Cannot get refresh Token." });

    const decode = jwt.verify(refreshToken, process.env.JWT_SECRET_REFRESH);
    const user = await UserModel.findById(decode.userId);
    // console.log(user)
    if (user.refreshToken !== refreshToken)
      return res
        .status(400)
        .json({ message: "Error while comparing user.refresh token" });

    let accessToken = generateAccessToken(user._id);

    res.cookie("accessToken", accessToken, { httpOnly: true });

    return res.status(200).json({ message: "Token generated Successfully." });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { registerController, loginController, getRefreshController };
