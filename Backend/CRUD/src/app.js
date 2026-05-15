// 1. create server
// 2. Configuration of server

const express = require("express");

const app = express();
app.use(express.json());

module.exports = app;
