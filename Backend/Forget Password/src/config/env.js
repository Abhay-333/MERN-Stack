import dotenv from "dotenv";
dotenv.config();
import { z } from "zod";
import appConstant from "../constants/app.constant.js";

const envSchema = z.object({
  PORT: z.coerce.number().default(appConstant.PORT),
  MONGO_URI: z.string().default(appConstant.MONGO_URI),
  JWT_SECRET: z.string(),
  JWT_EXPIRES_IN: z.string().default("7d"),
  RAW_TOKEN_SECRET: z.string(),
  APP_EMAIL: z.string(),
  APP_PASSWORD: z.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.log("Invalid env", parsed.error.format());
  process.exit(1);
}

export default parsed.data;
