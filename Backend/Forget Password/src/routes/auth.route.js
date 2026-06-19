import express from "express";

import {
  register,
  login,
  forgotPasswordController,
  resetPasswordController,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forget-password", forgotPasswordController);
router.post("/reset-passowrd/:token", resetPasswordController);

export default router;