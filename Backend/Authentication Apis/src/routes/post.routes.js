const express = require("express");
const createPostController = require("../controllers/post.controller");
const jwt = require("jsonwebtoken");
const UserModel = require("../models/user.model");

const router = express.Router();

router.post(
  "/create",
  async (req, res, next) => {
    // this is middleware before the controller we can check/validate then pass to the controller by next()

    // get the token from the cookies
    const { login_token } = req.cookies;
    if (!login_token)
      return res.status(404).json({ message: "Token Not found." });

    // decode it
    const decode = jwt.verify(login_token, process.env.JWT_SECRET); // for decoding the token
    console.log(decode);
    if (!decode) res.status(401).json({ message: "Unauthorize user." });

    // find the user in the DB
    const user = await UserModel.findById(decode.id);
    if (!user) res.status(404).json({ message: "User not found." });
 
    next();
    // return res.status(20)
  },
  createPostController,
);

module.exports = router;
