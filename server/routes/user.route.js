import express from "express";
import { register, login } from "../controllers/user.controller.js";

const router = express.Router();

/* GET users listing. */
router.post("/sign-up", register);
router.post("/sign-in", login);

export default router;
