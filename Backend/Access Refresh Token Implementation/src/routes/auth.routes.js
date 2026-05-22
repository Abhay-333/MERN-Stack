const express = require("express");
const {
  registerController,
  loginController,
  getRefreshController,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/getRefreshToken", getRefreshController);
module.exports = router;
