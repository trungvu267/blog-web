// socket.js
import { Server } from "socket.io";

export function configureSocket(server) {
  const io = new Server(server, {
    cors: true,
  });

  return io;
}
