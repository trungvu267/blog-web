import Bookmark from "../models/bookmark.model.js";
import Blog from "../models/blog.model.js";
import { StatusCodes } from "http-status-codes";

const getAllBookmarkByUser = async (req, res, next) => {
  const bookmark = await Bookmark.find({ author: req.user.userId }).sort({
    timestamp: -1,
  });

  res.json({
    success: true,
    message: "get all bookmark successfully",
    bookmark,
  });
};

const createBookmark = async (req, res) => {
  const checkBookmark = await Bookmark.findOne({
    author: req.user.userId,
    blog: req.body.blogId,
  });
  if (checkBookmark) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "you already Bookmark the post",
    });
  }
  const newBookmark = new Bookmark({
    author: req.user.userId,
    blog: req.blog._id,
  });
  await newBookmark.save();
  res.json({
    success: true,
    message: "you have successfully created",
    bookmark: newBookmark,
  });
};

const deleteBookmark = async (req, res) => {
  const bookmarkDeleteCondition = {
    author: req.user.userId,
    blog: req.body.blogId,
  };
  const deletedBookmark = await Bookmark.findOneAndDelete(
    bookmarkDeleteCondition
  );

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

export { createBookmark, getAllBookmarkByUser, deleteBookmark };
