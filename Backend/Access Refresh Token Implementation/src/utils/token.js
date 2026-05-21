const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const generateAccessToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_ACCESS, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ userId }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: "1d",
  });
};

module.exports = { generateAccessToken, generateRefreshToken };
