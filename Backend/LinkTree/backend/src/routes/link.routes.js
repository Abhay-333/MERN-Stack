import express from "express";
import {
  createLink,
  getLinksByUsername,
  //   getLinkById,
  //   updateLink,
  //   deleteLink,
} from "../controllers/link.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";

// import validateRequest from "../middlewares/validateRequest.js";
// import { linkValidation } from "../validators/link.validators.js";

const router = express.Router();

router.post("/", authMiddleware, createLink);

// router.get("/", getLinks);

router.get("/user/:username", authMiddleware, getLinksByUsername);

// router.get("/:id", getLinkById);

// router.put("/:id", updateLink);

// router.delete("/:id", deleteLink);

export default router;
