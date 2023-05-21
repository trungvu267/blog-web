import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import {
  createComment,
  updateComment,
  deleteComment,
  getCommentId,
} from "../controllers/comment.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.put("/:commentId", auth, asyncWrapper(updateComment));
router.delete("/:commentId", auth, asyncWrapper(deleteComment));
router.param("commentId", getCommentId);

export default router;
