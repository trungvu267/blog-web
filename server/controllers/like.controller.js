import Like from "../models/like.model.js";
import User from "../models/user.model.js";
import Blog from "../models/blog.model.js";
import { StatusCodes } from "http-status-codes";
// Like a blog
export const likeBlog = async (req, res) => {
  const { userId } = req.user;
  const { blogId } = req.body;
  // Check if the user exists
  const user = await User.findById(userId);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  // Check if the blog exists
  const blog = await Blog.findById(blogId);
  if (!blog) {
    const error = new Error("Không tìm thấy bài viết");
    error.status = StatusCodes.NOT_FOUND;
    throw error;
  }
  const existingLike = await Like.findOne({ user: userId, blog: blogId });
  if (existingLike) {
    existingLike.isLiked = !existingLike.isLiked;
    await existingLike.save();
    res
      .status(200)
      .json({
        message: "Like status toggled successfully",
        like: existingLike,
      });
  } else {
    // If like does not exist, create a new like
    const newLike = new Like({ user: userId, blog: blogId });
    await newLike.save();
  }

  res
    .status(200)
    .json({ message: "Like status toggled successfully", like: newLike });
};
export const getListLikedByUser = async (req, res, next) => {
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
};
