const express = require("express");
const cors = require("cors");
const fileRoutes = require("./routes/file.route");

const app = express();

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

app.use("/api/files", fileRoutes);
module.exports = app;
