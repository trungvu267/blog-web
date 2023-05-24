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

router.get("/getalltag", asyncWrapper(getAllTags));
router.get("/:tagId/getonetag", asyncWrapper(getOneTag));
router.post("/", auth, asyncWrapper(createTag));
router.put("/:tagId/updatetag", auth, asyncWrapper(updateTag));
router.delete("/:tagId/delete", auth, asyncWrapper(deleteTag));

router.param("tagId", getTagId);

export default router;
