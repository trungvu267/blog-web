import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import {
    createBookmark,
    getAllBlogbookmark,
    deleteBookmark,
    getBlogById
} from "../controllers/bookmark.controller.js"

import { auth } from "../middleware/auth.js";
const router = express.Router();

router.get('/', auth, asyncWrapper(getAllBlogbookmark));
router.post('/:blogId', auth, asyncWrapper(createBookmark));
router.put('/:blogId', auth, asyncWrapper(deleteBookmark));
router.param("blogId", getBlogById);

export default router;