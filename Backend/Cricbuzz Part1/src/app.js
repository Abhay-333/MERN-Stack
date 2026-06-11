import express from "express";
import morgan from "morgan";
import env from "./config/env.js";

const createApp = () => {
  // this is used for production
  const app = express();

  if (env.NODE_ENV === "development") app.use(morgan("dev"));
  return app;
};

export default createApp;
