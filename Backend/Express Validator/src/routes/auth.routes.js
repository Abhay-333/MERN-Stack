const express = require("express");
const { registerController } = require("../controllers/auth.controllers");
const registerValidationRules = require("../validators/auth.validator");

const authRoutes = express.Router();

authRoutes.post("/register", registerValidationRules, registerController);

module.exports = authRoutes;
