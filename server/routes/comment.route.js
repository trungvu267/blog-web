import express from "express";
import asyncWrapper from "../middleware/asyncWrapper.js";

import {
    getAllComments,
    createComment,
    updateComment,
    deleteComment,
    getBlogById,
    getCommentId,



} from "../controllers/comment.controller.js"
import { auth } from "../middleware/auth.js";
const router = express.Router();
// router.get("/", (req, res) => {
//     res.send('heee')
// });
router.get("/:blogId", auth, asyncWrapper(getAllComments));
router.post("/:blogId", auth, asyncWrapper(createComment));
router.put("/:blogId/:commentId", auth, asyncWrapper(updateComment));
router.delete("/:blogId/:commentId", auth, asyncWrapper(deleteComment));
router.param("blogId", getBlogById);
router.param("commentId", getCommentId);



export default router;