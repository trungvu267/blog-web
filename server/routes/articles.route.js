import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";
import articleController from "../controllers/article.controller.js";
import { auth } from "../middleware/auth.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.get("/published", asyncWrapper(articleController.getListPublished));
router
  .route("/")
  .get(asyncWrapper(articleController.getAll))
  .post(auth, asyncWrapper(articleController.create));
router
  .route("/:blogId")
  .get(asyncWrapper(articleController.getOne))
  .put(auth, asyncWrapper(articleController.update))
  .delete(auth, asyncWrapper(articleController.delete));
router.get("/:blogId/details", asyncWrapper(articleController.getDetails));
router.put("/:blogId/publish", auth, asyncWrapper(articleController.publish));
router.post(
  "/upload-title-image",
  upload.single("image"),
  asyncWrapper(articleController.upLoadTitleImage)
);

router.param("blogId", articleController.getArticleById);

// TODO: Thêm route lấy blog của từng user /profile/:userId/blogs
export default router;
