import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";



import {
    createLike,
    deleteLike,
    getAllBlogLike,
    getBlogById,
} from "../controllers/like.controller.js"

import { auth } from "../middleware/auth.js";

const router = express.Router();

router.get('/:blogId', asyncWrapper(getAllBlogLike));
router.post('/:blogId', auth, asyncWrapper(createLike));
router.delete('/:blogId', auth, asyncWrapper(deleteLike));
router.param("blogId", getBlogById);



export default router;