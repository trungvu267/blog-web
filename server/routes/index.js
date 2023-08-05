import { Router as ExpressRouter } from "express";
import passport from "passport";
import userRouter from "./user.route.js";
import articlesRouter from "./articles.route.js";
import commentRouter from "./comment.route.js";
import tagRouter from "./tag.route.js";
import bookmarkRouter from "./bookmark.route.js";
import reactionRouter from "./reaction.route.js";

const Router = ExpressRouter();
Router.get("/", (req, res) => {
  res.json({ message: "Hello from Blog app 💓" });
});
// NOTE: test routers
Router.get(
  "/test",
  passport.authenticate("bearer", { session: false }),
  (req, res) => {
    res.json(req.user);
  }
);
Router.use("/users", userRouter);
Router.use("/articles", articlesRouter);
Router.use("/comments", commentRouter);
Router.use("/tags", tagRouter);
Router.use("/bookmark", bookmarkRouter);
Router.use("/reactions", reactionRouter);

export default Router;
