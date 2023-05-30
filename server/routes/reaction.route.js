import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import {
  likeBlog,
  getListLikedByUser,
} from "../controllers/like.controller.js";

import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, asyncWrapper(getListLikedByUser));
router.post("/", auth, asyncWrapper(likeBlog));

export default router;
