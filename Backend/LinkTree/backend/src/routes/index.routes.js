import { Router } from "express";
import authRoutes from "./auth.routes.js";
import linkRoutes from "./link.routes.js";
import authMiddleware from "../middlewares/auth.middleware.js";

const router = Router();

// Index all routes
router.use("/auth", authRoutes);
router.use("/links", authMiddleware, linkRoutes);

// Health check endpoint
router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is running",
  });
});

export default router;
