import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import {
  getAllTags,
  getOneTag,
  createTag,
  updateTag,
  deleteTag,
  getTagId,
} from "../controllers/tag.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", asyncWrapper(getAllTags));
router.post("/", auth, asyncWrapper(createTag));
router.get("/:tagId", asyncWrapper(getOneTag));
router.put("/:tagId", auth, asyncWrapper(updateTag));
router.delete("/:tagId", auth, asyncWrapper(deleteTag));

router.param("tagId", getTagId);

export default router;
