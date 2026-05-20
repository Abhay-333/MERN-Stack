const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const registerUserController = async (req, res) => {
  try {
    const { username, email, password, mobile } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const doesExists = await UserModel.findOne({ email });

    if (doesExists)
      return res.status(409).json({ message: "Email Already Exists." });

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username,
      email,
      password: hashPassword,
      mobile,
    });

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("token", token);
    return res
      .status(201)
      .json({ message: "User Registered Successfully.", newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

const loginUserController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const doesExists = await UserModel.findOne({ email });

    if (!doesExists)
      return res.status(400).json({ message: "User not found" });

    const compareHash = await bcrypt.compare(password, doesExists.password);
    console.log(compareHash)
    if (!compareHash)
      return res.status(400).json({ message: "Invalid Credentials." });

    const token = jwt.sign({ id: doesExists._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.cookie("login_token", token);
    return res
      .status(200)
      .json({ message: "User LoggedIn Successfully.", user: doesExists });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { registerUserController, loginUserController };
