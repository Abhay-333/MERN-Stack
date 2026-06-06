const express = require("express");
const indexRoutes = require("./routes/index.routes");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", indexRoutes);
module.exports = app;
