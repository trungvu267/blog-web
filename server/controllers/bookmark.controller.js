import Bookmark from "../models/bookmark.model.js"
import Blog from "../models/blog.model.js"
import { StatusCodes } from "http-status-codes";

const getAllBlogbookmark = async(req, res, next) => {
    // TODO: add sorting
    const bookmark = await Bookmark.find({ author: req.user.userId });

    res.json({
        success: true,
        message: 'get all like blog successfully',
        bookmark
    })
};

const createBookmark = async(req, res) => {
    const checkBookmark = await Bookmark.findOne({
        author: req.user.userId,
        blog: req.blog._id,
    });
    if (checkBookmark) {
        return res.status(StatusCodes.BAD_REQUEST).json({
            success: false,
            message: 'you already Bookmark the post',
        });
    }
    const newBookmark = new Bookmark({
        author: req.user.userId,
        blog: req.blog._id,
    })
    await newBookmark.save();
    res.json({
        success: true,
        message: "you have successfully created",
        bookmark: newBookmark,
    });

};

const deleteBookmark = async(req, res) => {
    const bookmarkDeleteCondition = {
        author: req.user.userId,
        blog: req.blog._id,
    };
    const deletedBookmark = await Bookmark.findOneAndDelete(bookmarkDeleteCondition);

    if (!deletedBookmark)
        return res.status(StatusCodes.NOT_FOUND).json({
            success: false,
            message: "Bookmark not found or user not authorised",
        });

    res.json({
        success: true,
        message: "delete Bookmark success",
        bookmark: deletedBookmark,
    });
};
const getBlogById = (req, res, next, id) => {
    console.log('id', id)
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

export {
    createBookmark,
    getAllBlogbookmark,
    deleteBookmark,
    getBlogById
};