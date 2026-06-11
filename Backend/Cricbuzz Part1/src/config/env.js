import dotenv, { parse } from "dotenv";
dotenv.config();
import zod from "zod";
import appConstant from "../constant/app.constant.js";

const envSchema = zod.object({
  // hum env mey bhi validations lagate hai production mey
  PORT: zod.coerce.number().default(appConstant.PORT),
  MONGO_URI: zod.string().default(appConstant.MONGO_URI),
  NODE_ENV: zod.string().default(appConstant.NODE_ENV),
  LOGGER_LEVEL: zod.string().default(appConstant.LOGGER_LEVEL),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  logger.info("problem in env");
}

export default parsed.data;

// console.log() ---> isska by default blocking nature hai
