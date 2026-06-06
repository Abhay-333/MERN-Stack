const express = require("express");
const authRoutes = require("./auth.routes");

const router = express.Router();

// Mounting Route
router.use("/auth", authRoutes);

module.exports = router;
