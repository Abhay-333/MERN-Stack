import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    session: false,
  }),
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/", session: false }), // passport.js ka middleware
  (req, res) => {
    console.log(req.user);
    const token = jwt.sign({ _id: req.user._id }, process.env.JWT_SECRET, {
      expiresIn: "15m",
    });
    res.cookie("token", token);
    res.send("ok");
  },
);

export default router;
