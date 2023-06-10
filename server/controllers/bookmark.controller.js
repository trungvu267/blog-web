import Bookmark from "../models/bookmark.model.js";
import { StatusCodes } from "http-status-codes";

export default {
  getAllBookmarkByUser: async (req, res, next) => {
    const bookmark = await Bookmark.find({
      author: req.user.userId,
      isBookmarked: true,
    }).sort({
      timestamp: -1,
    });

    res.json({
      success: true,
      message: "get all bookmark successfully",
      bookmark,
    });
  },

  getAllBookmarkDetailByUser: async (req, res, next) => {
    const bookmark = await Bookmark.find({
      author: req.user.userId,
      isBookmarked: true,
    })
      .populate({ path: "author", select: "name " })
      .populate({ path: "blog", select: "title" })
      .sort({
        timestamp: -1,
      });

    res.json({
      success: true,
      message: "get all bookmark successfully",
      bookmark,
    });
  },

  set: async (req, res) => {
    const checkBookmark = await Bookmark.findOne({
      author: req.user.userId,
      blog: req.body.blogId,
    });

    if (checkBookmark) {
      checkBookmark.isBookmarked = !checkBookmark.isBookmarked;
      checkBookmark.save();
      return res.json({
        bookmark: checkBookmark,
      });
    }

    const newBookmark = await Bookmark.create({
      author: req.user.userId,
      blog: req.body.blogId,
    });

    await newBookmark.save();
    res.json({
      bookmark: newBookmark,
    });
  },

  delete: async (req, res) => {
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
  },
};
