import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import blogController from "../controllers/blog.controller.js";
import { auth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";
import { likeBlog } from "../controllers/like.controller.js";

const router = express.Router();

router.get("/", asyncWrapper(blogController.getAll));
router.get("/published", asyncWrapper(blogController.getListPublished));
router.post("/", auth, asyncWrapper(blogController.create));
router.get("/:blogId", asyncWrapper(blogController.getOne));
router.put("/:blogId", auth, asyncWrapper(blogController.update));
router.delete("/:blogId", auth, asyncWrapper(blogController.delete));
router.get("/:blogId/details", asyncWrapper(blogController.getDetails));
router.put("/:blogId/like", asyncWrapper(blogController.likeBlog));
router.put("/:blogId/publish", auth, asyncWrapper(blogController.publish));
router.post(
  "/upload-title-image",
  upload.single("image"),
  asyncWrapper(blogController.upLoadTitleImage)
);

router.param("blogId", blogController.getBlogById);

// TODO: Thêm route lấy blog của từng user /profile/:userId/blogs
export default router;
