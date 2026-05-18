import { createServer } from "node:http";
import { env } from "./config/env.js";
import { logger } from "./config/logger.js";
import { initSentry } from "./config/sentry.js";
import { createApp } from "./app.js";
import { createSocketServer } from "./socket/index.js";

initSentry();

const app = createApp();
const httpServer = createServer(app);
createSocketServer(httpServer);

httpServer.listen(env.PORT, () => {
  logger.info(`MAK backend listening on port ${env.PORT}`);
});
