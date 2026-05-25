const express = require("express");
const app = express();
const fileRoutes = require("./routes/files.routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true })); // middleware
app.use("/api/files", fileRoutes);

module.exports = app;
