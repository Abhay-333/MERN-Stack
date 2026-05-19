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
      return res.status(409).json({ message: "Email already exists." });

    // hashing password
    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = await UserModel.create({
      username,
      email,
      password: hashPassword,
      mobile,
    });

    //authorization
    // here we give it payload, random string (key), expration duration
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    // now store this token into the cookie storage of the browser but the problem is express dont know frontend cookies that is why we need this cookie-parser middleware
    res.cookie("token", token);

    return res
      .status(201)
      .json({ message: "User registered successfully.", newUser });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error", error });
  }
};

module.exports = { registerUserController };
