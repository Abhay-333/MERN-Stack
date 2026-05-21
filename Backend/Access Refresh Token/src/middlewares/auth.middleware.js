const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");
const authMiddleware = async (req, res, next) => {
  try {
    let token = req.cookies.log_token;
    console.log(token);
    if (!token)
      return res.status(404).json({ message: "Token not found in Middleware" });

    const decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decode);
    if (!decode)
      return res.status(400).json({ messge: "Error while decoding the token" });

    const user = UserModel.findById(decode._id);
    req.user = user
    next();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Error in middleware" });
  }
};

module.exports = authMiddleware;
