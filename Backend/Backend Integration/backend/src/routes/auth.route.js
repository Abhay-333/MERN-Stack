const express = require("express");
const {
  registerController,
  loginController,
} = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const ApiResponse = require("../utils/apiResponse");

const router = express.Router();

router.get("/me", authMiddleware, (req, res) => {
  res
    .status(200)
    .json(new ApiResponse("Currently LoggedIn User", (user = req.user)));
});
router.post("/register", registerController);
router.post("/login", loginController);
module.exports = router;
