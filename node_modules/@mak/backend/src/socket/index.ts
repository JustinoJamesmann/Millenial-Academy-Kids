import type { Server as HttpServer } from "node:http";
import { Server } from "socket.io";
import { env } from "../config/env.js";

export function createSocketServer(httpServer: HttpServer) {
  const io = new Server(httpServer, {
    cors: { origin: env.FRONTEND_URL, credentials: true }
  });

  io.on("connection", (socket) => {
    socket.emit("connected", { socketId: socket.id });
  });

  return io;
}
