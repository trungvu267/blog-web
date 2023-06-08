import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";
import notFound from "./middleware/notFound.js";
import errorHandler from "./middleware/errorHandler.js";
import passport from "passport";
import { bearerAuth, googleAuth } from "./config/passport.js";
import route from "./routes/index.js";
import multer from "multer";
import session from "express-session";
// config upload image

const app = express();
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

passport.use(bearerAuth);
passport.use(googleAuth);
app.use("/", route);

app.get(
  "/api/auth/callback/google",
  passport.authenticate("google", {
    failureRedirect: "/",
    failureMessage: true,
  }),
  function (req, res) {
    res.json(req.user);
  }
);
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
passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

export default app;
