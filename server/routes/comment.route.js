import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import commentController from "../controllers/comment.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get(
  "/all/:blogId",
  asyncWrapper(commentController.getListCommentByBlog)
);
router.post("/", auth, asyncWrapper(commentController.create));
router.put("/:commentId", auth, asyncWrapper(commentController.update));
router.delete("/:commentId", auth, asyncWrapper(commentController.delete));
router.param("commentId", commentController.getCommentId);

export default router;
