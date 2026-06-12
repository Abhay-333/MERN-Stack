export default {
  PORT: 3000,
  MONGO_URI: "mongodb://localhost:27017/cricbuzz",
  NODE_ENV: "development",
  LOGGER_LEVEL: "info",
  RATELIMIT: 100,
  RATELIMIT_WINDOWMS: 15 * 60 * 1000, // min * sec * millisec
};
