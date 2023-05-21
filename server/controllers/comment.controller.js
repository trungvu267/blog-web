import Comment from "../models/comment.model.js"
import Blog from "../models/blog.model.js";
import { StatusCodes } from "http-status-codes";

// get allcomments
const getAllComments = async(req, res, next) => {
    const comments = await Comment.find();
    res.jsonp(comments)
};


// post create
const createComment = async(req, res) => {

    const { content } = req.body;


    if (!(content.length > 6)) {
        return res
            .status(StatusCodes.BAD_REQUEST)
            .json({ success: false, message: "you must be provide content" });
    }

    const newContent = new Comment({
        content: content,
        author: req.user.userId,
        blog: req.blog._id,

    });
    await newContent.save();
    res.json({
        success: true,
        message: "you have successfully created",
        Comment: newContent,
    });
};
// update comment.
const updateComment = async(req, res) => {
    let updateComment = {
        ...req.body,
    }

    const commentUpdateCondition = { _id: req.comment._id, author: req.user.userId };
    const comment = await Comment.findOne(commentUpdateCondition);
    if (!comment) {
        return res
            .status(StatusCodes.NOT_FOUND)
            .json({ success: false, message: "post not found" });
    }
    if (req.user.role === "editor" && !!published) {
        return res
            .status(StatusCodes.NOT_MODIFIED)
            .json({ success: false, message: "you are not Permissions" });
    }
    const newUpdatecomment = await Comment.findOneAndUpdate(
        commentUpdateCondition,
        updateComment, { new: true }
    );
    // User not authorised to update post or post not found
    if (!newUpdatecomment)
        return res.status(StatusCodes.FORBIDDEN).json({
            success: false,
            message: "Post not found or user not authorised",
        });

    res.json({
        success: true,
        message: "updated post was successfully updated",
        post: newUpdatecomment,
    });
};

// deletecomment
const deleteComment = async(req, res) => {
    const commentDeleteCondition = { _id: req.comment.id, author: req.user.userId };
    const comment = await Comment.findOne(commentDeleteCondition);

    if (!comment) {
        return res
            .status(StatusCodes.NOT_FOUND)
            .json({ success: false, message: "post not found" });
    }

    const deletedComment = await Comment.findOneAndDelete(commentDeleteCondition);

    if (!deletedComment)
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: "Post not found or user not authorised",
        });

    res.json({
        success: true,
        message: "delete post success",
        blog: deletedComment,
    });
};


const getBlogById = (req, res, next, id) => {
    Blog.findById(id)
        .then((blog) => {
            req.blog = blog;
            next();
        })
        .catch((err) => {
            console.log(err);
            const notFound = new Error("Blog not found");
            next(notFound);
        });
};
const getCommentId = (req, res, next, id) => {
    Comment.findById(id)
        .then((comment) => {
            req.comment = comment;
            next();
        })
        .catch((err) => {
            console.log(err);
            const notFound = new Error("Blog not found");
            next(notFound);
        });
};




export {
    getAllComments,
    createComment,
    updateComment,
    deleteComment,
    getCommentId,
    getBlogById

};