const mongoose = require("mongoose");
const UserModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerController = async (req, res) => {
  const { username, email, password, mobile, role } = req.body;

  try {
    if (!username || !email || !password || !mobile)
      return res.status(400).json({ message: "All fields are required." });

    const isExists = await UserModel.findOne({ email });

    if (isExists)
      return res.status(409).json({ message: "Email already exists." });

    // const hashPassword = await bcrypt.hash(password, 10); // this is how you create a salt original password + number of rounds

    const newUser = await UserModel.create({
      username,
      email,
      password,
      mobile,
      role,
    });

    // this is a singleton token technique
    const token = newUser.generateJWT();

    res.cookie("reg_token", token);
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

    // const comparePassword = await bcrypt.compare(password, isExists.password); // this is how you create a salt original password + number of rounds

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
