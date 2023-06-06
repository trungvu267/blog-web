import app from "../app.js";
import http from "http";

const httpServer = http.createServer(app);
export default httpServer;
