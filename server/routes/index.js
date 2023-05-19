import { Router as ExpressRouter } from "express";
import passport from "passport";
import userRouter from "./user.route.js";
import blogsRouter from "./blogs.route.js";

const Router = ExpressRouter();
Router.get("/", (req, res) => {
  res.json({ message: "Hello from Blog app 💓" });
});
Router.use("/users", userRouter);
Router.use("/blogs", blogsRouter);
export default Router;
