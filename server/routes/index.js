import { Router as ExpressRouter } from "express";
import passport from "passport";
// import userRouter from """
import pkg from "passport-http-bearer";

import userRouter from "./user.route.js";
import blogsRouter from "./blogs.route.js";

import authentication from "../middleware/auth.js";
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
Router.use("/blogs", blogsRouter);
export default Router;