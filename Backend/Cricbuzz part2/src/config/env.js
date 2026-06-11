import dotenv from "dotenv";
dotenv.config();
import zod from "zod";
import appContants from "../constants/app.contants.js";

const envSchema = zod.object({
  PORT: zod.coerce.number().default(appContants.PORT),
  MONGO_URI: zod.string().default(appContants.MONGO_URI),
  NODE_ENV: zod.string().default(appContants.NODE_ENV),
  LOGGER_LEVEL: zod.string().default(appContants.LOGGER_LEVEL),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success)  logger.error("Problem in env");

export default parsed.data;
