import jwt from "jsonwebtoken";
import env from "../config/env.js"

export const generatRawToken = (userId) => {
  return jwt.sign({ id: userId }, env.RAW_TOKEN_SECRET, { expiresIn: "15m" });
};
