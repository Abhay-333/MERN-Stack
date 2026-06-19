import {
  registerUser,
  loginUser,
  forgotPassword,
} from "../services/auth.service.js";
import env from "../config/env.js";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  try {
    const user = await registerUser(req.body);

    res.status(201).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const data = await loginUser(req.body);

    res.cookie("token", data.token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      user: data.user,
      token: data.token,
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const forgotPasswordController = async (req, res) => {
  try {
    const rawToken = await forgotPassword(req.body);

    res.status(200).json({
      success: true,
      message: "Link Sent",
    });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};

export const resetPasswordController = async (req, res) => {
  try {
    const token = req.params.token;

    if (!token) return res.status(404).json({ message: "Token not found" });

    let decode = jwt.verify(token, env.RAW_TOKEN_SECRET);
    let user = await User.findById(decode._id);

    res.render("update.js", { userId: user._id });
  } catch (error) {
    res.status(401).json({
      success: false,
      message: error.message,
    });
  }
};
