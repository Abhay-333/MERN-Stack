const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/auth.route");
const errorMiddleware = require("./middlewares/error.middleware");
const authMiddleware = require("./middlewares/auth.middleware");
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use("/api/auth", authRoutes);

app.use(errorMiddleware);

module.exports = app;
