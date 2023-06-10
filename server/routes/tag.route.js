import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import tagController from "../controllers/tag.controller.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get("/", asyncWrapper(tagController.getAll));
router.post("/", auth, asyncWrapper(tagController.create));
router.get("/:tagId", asyncWrapper(tagController.getOne));
router.put("/:tagId", auth, asyncWrapper(tagController.update));
router.delete("/:tagId", auth, asyncWrapper(tagController.delete));

router.param("tagId", tagController.getTagId);

export default router;
