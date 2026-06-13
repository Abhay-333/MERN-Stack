import dotenv from "dotenv";
dotenv.config();
import zod from "zod";
import appContants from "../constants/app.contant.js";

const envSchema = zod.object({
  PORT: zod.coerce.number().default(appContants.PORT),
  MONGO_URI: zod.string().default(appContants.MONGO_URI),
  NODE_ENV: zod.string().default(appContants.NODE_ENV),
  LOGGER_LEVEL: zod.string().default(appContants.LOGGER_LEVEL),
  RATELIMIT: zod.coerce.number().default(appContants.RATELIMIT),
  RATELIMIT_WINDOWMS: zod.coerce
    .number()
    .default(appContants.RATELIMIT_WINDOWMS),
  CORS_ORIGIN: zod.string(),
  JWT_SECRET: zod.string(),
  REFRESH_TOKEN_SECRET: zod.string(),
  ACCESS_TOKEN_SECRET: zod.string(),
  GOOGLE_CLIENT_ID: zod.string(),
  GOOGLE_CLIENT_SECRET: zod.string(),
  GOOGLE_CALLBACK_URL: zod.string(),
  REDIRECT_URL: zod.string(),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) logger.error("Problem in env");

export default parsed.data;
