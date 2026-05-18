const express = require("express");
const listRoutes = require("./routes/list.routes");
const cors = require("cors");

const app = express();

app.use(cors({ origin: `http://localhost:5173` }));
app.use(express.json());
app.use("/api/lists", listRoutes);

module.exports = app;
