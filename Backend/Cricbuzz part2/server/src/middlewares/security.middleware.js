import express from "express";
import helmet from "helmet";
import hpp from "hpp";
import compression from "compression";
import cors from "cors";
import cookieParser from "cookie-parser";
import rateLimit from "express-rate-limit";
import env from "../config/env.js";

export default function securityMiddleware(app) {
  app.use(helmet());

  app.use(
    cors({
      origin: env.CORS_ORIGIN.split(",").map((origin) => origin.trim()),
      credentials: true,
    }),
  );

  app.use(
    rateLimit({
      windowMs: env.RATELIMIT_WINDOWMS,
      limit: env.RATELIMIT, // itne sare request allow karo 15min mey
      legacyHeaders: true, // for security purpose
      message: "Too many request. Try again after few minutes",
    }),
  );

  app.use(hpp());
  app.use(compression());

  app.use(express.json({ limit: "3mb" })); // this will be the limit of data that we can send through frontend(req.body)
  app.use(express.urlencoded({ extended: true, limit: "3mb" })); // for the form data
}
