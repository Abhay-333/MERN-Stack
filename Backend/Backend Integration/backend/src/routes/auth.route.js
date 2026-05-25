const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const ApiResponse = require("../utils/apiResponse");

const router = express.Router();

router.post("/me", authMiddleware, (req, res) => {
  res
    .status(200)
    .json(new ApiResponse("Currently LoggedIn User", (user = req.user)));
});

router.post("/register", registerController);
router.post("/login", loginController);
router.post("/logout", logoutController);
module.exports = router;
