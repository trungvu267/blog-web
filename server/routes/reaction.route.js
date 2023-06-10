import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import reaction from "../controllers/reaction.controller.js";

import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, asyncWrapper(reaction.getListReactionByUser));
router.post("/", auth, asyncWrapper(reaction.reaction));

export default router;
