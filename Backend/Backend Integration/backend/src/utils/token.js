const jwt = require("jsonwebtoken");

const generateAccessToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET_ACCESS, {
    expiresIn: "15m",
  });
};

const generateRefreshToken = (userId) => {
  return jwt.sign({ _id: userId }, process.env.JWT_SECRET_REFRESH, {
    expiresIn: "1d",
  });
};

module.exports = { generateAccessToken, generateRefreshToken };
