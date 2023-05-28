import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import {
  getAllBlog,
  getOne,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
  getDetails,
} from "../controllers/blog.controller.js";
import { auth } from "../middleware/auth.js";
import { createComment } from "../controllers/comment.controller.js";
import { likeBlog } from "../controllers/like.controller.js";
const router = express.Router();

router.get("/", asyncWrapper(getAllBlog));
router.post("/", auth, asyncWrapper(createBlog));
router.get("/:blogId", asyncWrapper(getOne));
router.put("/:blogId", auth, asyncWrapper(updateBlog));
router.delete("/:blogId", auth, asyncWrapper(deleteBlog));
router.post("/:blogId/comments", auth, asyncWrapper(createComment));
router.get("/:blogId/comments", asyncWrapper(createComment));
router.get("/:blogId/details", asyncWrapper(getDetails));
router.put("/:blogId/like", asyncWrapper(likeBlog));

router.param("blogId", getBlogById);

// TODO: Thêm route lấy blog của từng user /profile/:userId/blogs
export default router;
