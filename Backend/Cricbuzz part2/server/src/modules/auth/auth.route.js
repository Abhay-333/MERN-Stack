import express from "express";
import AuthController from "./auth.controller";

const authRoute = express.Router();
const AuthController = new AuthController()

export default authRoute;
