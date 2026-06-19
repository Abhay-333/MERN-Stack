import express from "express";

import {
  register,
  login,
  forgotPasswordController,
  resetPasswordController,
  updatePassword,
} from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/forget-password", forgotPasswordController);
router.get("/reset-password/:token", resetPasswordController);
router.post("/update-password/:userId", updatePassword);

export default router;