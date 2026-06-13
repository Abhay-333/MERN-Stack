export default {
  PORT: 3000,
  MONGO_URI: "mongodb://localhost:27017/cricbuzz",
  NODE_ENV: "development",
  LOGGER_LEVEL: "info",
  RATELIMIT: 100,
  RATELIMIT_WINDOWMS: 15 * 60 * 1000, // min * sec * millisec
};

export const app_config = {
  jwt: {
    accessToken: {
      expiresIn: "1h",
    },
    refreshToken: {
      expiresIn: "30d",
    },
  },

  cookie: {
    accessToken: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 60 * 60 * 1000,
    },
    refreshToken: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    },
  },
};
