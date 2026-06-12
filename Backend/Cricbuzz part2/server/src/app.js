import express from "express";
import env from "./config/env.js";
import morgan from "morgan";
import securityMiddleware from "./middlewares/security.middleware.js";
import googleOAuthMiddleware from "./middlewares/googleOAuth.middleware.js";
import authRoute from "./modules/auth/auth.route.js";

// we are going to implement 4 middleware for the security
// helmet - response/browser mey security headers bhejta hai
// hpp - ek cyber security attack ko rokta hai jisska naam hai http parameter pollution attack.
// compression - jo bhi response aa rha hai usse compress kr ke bhej do jise humari bandwidth bach jati hai

const createServer = () => {
  const app = express();
  if (env.NODE_ENV === "development") app.use(morgan("dev"));
  securityMiddleware(app);
  googleOAuthMiddleware(app);
  app.use("api/auth",authRoute)
  return app;
};

export default createServer;
