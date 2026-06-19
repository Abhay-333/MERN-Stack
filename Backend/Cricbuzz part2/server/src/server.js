import createServer from "./app.js";
import env from "./config/env.js";
import logger from "./config/logger.js";
import { connectDB } from "./database/db.js";
import http from "http";
import io from "socket.io";
import { initSocket } from "./socket/socket.js";

const startServer = () => {
  const app = createServer();
  const httpServer = http.createServer(app);
  const io = new io.Server(httpServer);

  initSocket(io)
  
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

startServer();
export default startServer;
