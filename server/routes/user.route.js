import express from "express";
import { register, login } from "../controllers/user.controller.js";
import passport from "passport";
const router = express.Router();

/* GET users listing. */
router.post("/sign-up", register);
router.post("/sign-in", login);
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

export default router;
