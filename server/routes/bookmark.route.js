import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import bookmarkController from "../controllers/bookmark.controller.js";

import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", auth, asyncWrapper(bookmarkController.getAllBookmarkByUser));
router.get(
  "/details",
  auth,
  asyncWrapper(bookmarkController.getAllBookmarkDetailByUser)
);
router.post("/", auth, asyncWrapper(bookmarkController.set));
router.delete("/", auth, asyncWrapper(bookmarkController.delete));

export default router;
