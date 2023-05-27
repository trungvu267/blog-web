import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import {
  createLike,
  deleteLike,
  getAllBlogLike,
} from "../controllers/like.controller.js";
import { getBlogById } from "../controllers/blog.controller.js";

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/:blogId", asyncWrapper(getAllBlogLike));
router.post("/:blogId", auth, asyncWrapper(createLike));
router.delete("/:blogId", auth, asyncWrapper(deleteLike));
router.param("blogId", getBlogById);

export default router;
