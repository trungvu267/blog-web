import app from "../app.js";
import debug from "debug";
import http from "http";
import db from "../config/db.js";
import config from "../config/config.js";

const server = http.createServer(app);
const port = normalizePort(config.port || "3000");
app.set("port", port);

const debugServer = debug("server:server");
db.connect()
  .then(() => {
    server.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
server.on("error", onError);
server.on("listening", onListening);

function normalizePort(val) {
  const port = parseInt(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debugServer("Listening on " + bind);
}
