import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import {
  getAllBlog,
  getOne,
  createBlog,
  updateBlog,
  deleteBlog,
  getBlogById,
} from "../controllers/blog.controller.js";
import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get("/", asyncWrapper(getAllBlog));
router.post("/", auth, asyncWrapper(createBlog));
router.get("/:blogId", asyncWrapper(getOne));
router.put("/:blogId", auth, asyncWrapper(updateBlog));
router.delete("/:blogId", auth, asyncWrapper(deleteBlog));
router.param("blogId", getBlogById);
// TODO: Thêm route lấy blog của từng user /profile/:userId/blogs
export default router;
