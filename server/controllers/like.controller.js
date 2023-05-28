import Like from "../models/like.model.js";
import { StatusCodes } from "http-status-codes";

// TODO: SỬA LẠI SAU
const getAllBlogLike = async (req, res, next) => {
  const like = await Like.find({ blog: req.blog._id });

  res.json({
    success: true,
    message: "get all like blog successfully",
    like,
  });
};
const createLike = async (req, res) => {
  const checkLike = await Like.findOne({
    author: req.user.userId,
    blog: req.blog._id,
  });
  if (checkLike) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      success: false,
      message: "you already liked the post",
    });
  }
  const newLike = new Like({
    author: req.user.userId,
    blog: req.blog._id,
  });
  await newLike.save();
  res.json({
    success: true,
    message: "you have successfully created",
    like: newLike,
  });
};

const deleteLike = async (req, res) => {
  const likeDeleteCondition = {
    author: req.user.userId,
    blog: req.blog._id,
  };
  const deletedlike = await Like.findOneAndDelete(likeDeleteCondition);

  if (!deletedlike)
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "Like not found or user not authorised",
    });

  res.json({
    success: true,
    message: "delete like success",
    like: deletedlike,
  });
};

export { createLike, deleteLike, getAllBlogLike };