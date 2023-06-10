import express from "express";
import userController from "../controllers/user.controller.js";
import passport from "passport";
const router = express.Router();

/* GET users listing. */
router.post("/sign-up", userController.register);
router.post("/sign-in", userController.login);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

export default router;
