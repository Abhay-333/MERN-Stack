import createServer from "./app.js";
import env from "./config/env.js";
import logger from "./config/logger.js";
import { connectDB } from "./database/db.js";

const startServer = () => {
  const app = createServer();

  connectDB()
    .then(() => {
      app.listen(env.PORT, () => {
        logger.info(env.PORT, "Server running...");
      });
    })
    .catch((err) => {
      logger.error("Error in DB connec", err);
    });
};

startServer()
export default startServer;
