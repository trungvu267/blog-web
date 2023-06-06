import { Server } from "socket.io";
import httpServer from "./httpServer.js";
const io = new Server(httpServer, {
  cors: true,
});
export default io;
