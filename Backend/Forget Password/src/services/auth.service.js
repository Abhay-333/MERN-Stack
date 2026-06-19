import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import env from "../config/env.js";
import { generatRawToken } from "../utils/generateToken.js";
import sendEmail from "../config/mail.js";
import emailTemp from "../utils/emailTemplate.js";

export const registerUser = async ({ username, email, password }) => {
  const existingUser = await User.findOne({ email });

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("Invalid Credentials");
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    throw new Error("Invalid Credentials");
  }

  const token = jwt.sign({ id: user._id }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRES_IN,
  });

  return {
    user,
    token,
  };
};

export const forgotPassword = async ({ email }) => {
  if (!email) throw new Error("email not found");

  const user = await User.findOne({ email });

  if (!user) {
    throw new Error("email not found");
  }

  const rawToken = generatRawToken(user._id);

  const resetLink = `http://localhost:5000/api/auth/reset-password/${rawToken}`;

  let mailSyntax = emailTemp(user.username, resetLink);
  await sendEmail(env.APP_EMAIL, "Reset your password", mailSyntax);

  return {
    rawToken,
  };
};
