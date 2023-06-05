import { pino } from "pino";
import Logger from "pino-http";
const settings = pino({
  transport: {
    target: "pino-pretty",
    options: {
      translateTime: "SYS:dd-mm-yyyy HH:MM:ss",
      ignore: "pid,hostname",
    },
  },
});
const logger = Logger(settings);
export default logger;
