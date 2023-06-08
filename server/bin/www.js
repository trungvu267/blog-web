import app from "../app.js";
import debug from "debug";
import db from "../config/db.js";
import httpServer from "../config/httpServer.js";
import io from "../config/socket.js";
import config from "../config/config.js";

const port = normalizePort(config.port || "3000");
app.set("port", port);

const debugServer = debug("server:server");

io.on("connection", (socket) => {
  console.log("A user connected");
  socket.on("join", (data) => {
    console.log(data);
  });
});

db.connect()
  .then(() => {
    httpServer.listen(port, () => {
      console.log(`Server is listening to port ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });

httpServer.on("error", onError);
httpServer.on("listening", onListening);

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
  const addr = httpServer.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debugServer("Listening on " + bind);
}
