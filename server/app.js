import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import dotenv from "dotenv";
import passport from "passport";
import { bearerAuth } from "./config/passport.js";
import route from "./routes/index.js";
dotenv.config();
// config upload image

const app = express();

app.use(passport.initialize());
app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

passport.use(bearerAuth);
app.use("/", route);

// error handler
app.use(notFound);
app.use(errorHandler);
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get("env") === "development" ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render("error");
// });

export default app;
