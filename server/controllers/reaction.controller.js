import Like from "../models/like.model.js";
import User from "../models/user.model.js";
import Article from "../models/article.model.js";
import { StatusCodes } from "http-status-codes";
// Like a article
export default {
  reaction: async (req, res) => {
    const { userId } = req.user;
    const { articleId } = req.body;
    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Check if the article exists
    const article = await Article.findById(articleId);
    if (!article) {
      const error = new Error("Không tìm thấy bài viết");
      error.status = StatusCodes.NOT_FOUND;
      throw error;
    }
    const existingLike = await Like.findOne({
      user: userId,
      article: articleId,
    });
    if (existingLike) {
      existingLike.isLiked = !existingLike.isLiked;
      await existingLike.save();
      return res.status(200).json({
        message: "Like status toggled successfully",
        like: existingLike,
      });
    } else {
      // If like does not exist, create a new like
      const newLike = new Like({ user: userId, article: articleId });
      await newLike.save();
      return res
        .status(200)
        .json({ message: "Like status toggled successfully", like: newLike });
    }
  },

  getListReactionByUser: async (req, res, next) => {
    const listLiked = await Like.find({
      user: req.user.userId,
      isLiked: true,
    }).sort({
      timestamp: -1,
    });

    res.json({
      success: true,
      message: "get all listLiked successfully",
      listLiked,
    });
  },
};
