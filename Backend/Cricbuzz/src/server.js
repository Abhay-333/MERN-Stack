import createApp from "./app.js";
import logger from "./config/logger.js";
import env from "./config/env.js";
import { connectDb } from "./database/db.js";

const startServer = () => {
  const app = createApp();
  connectDb()
    .then(() => {
      app.listen(env.PORT, () => {
        logger.info({ port: env.PORT }, `Server running`);
      });
    })
    .catch((err) => {
      logger.error({ err }, "error while running the server");
    });
};

startServer();
