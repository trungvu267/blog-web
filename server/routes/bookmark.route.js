import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import {
  setBookmark,
  getAllBookmarkByUser,
  getAllBookmarkDetailByUser,
  deleteBookmark,
} from "../controllers/bookmark.controller.js";

import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, asyncWrapper(getAllBookmarkByUser));
router.get("/details", auth, asyncWrapper(getAllBookmarkDetailByUser));
router.post("/", auth, asyncWrapper(setBookmark));
router.delete("/", auth, asyncWrapper(deleteBookmark));

export default router;
