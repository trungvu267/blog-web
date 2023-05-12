import { Router as ExpressRouter } from "express";
// import userRouter from """
import userRouter from "./user.route.js";
import authentication from "../middleware/auth.js";
const Router = ExpressRouter();
Router.get("/", (req, res) => {
  res.json({ message: "Hello from Blog app 💓" });
});
Router.use("/users", userRouter);
export default Router;
