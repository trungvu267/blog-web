import Blog from "../models/blog.model.js";
import Comment from "../models/comment.model.js";
import { StatusCodes } from "http-status-codes";

const getAllBlog = async (req, res, next) => {
  // TODO: add sorting
  const blogs = await Blog.find();
  res.jsonp(blogs);
};

const getAllBlogByAuthor = async (req, res) => {
  const { userId } = req.params;
  const blogs = await Blog.find({ author: userId });
  res.json(blogs);
};

const getOne = async (req, res) => {
  res.json({ success: true, message: "find post success", blog: req.blog });
};
const getDetails = async (req, res) => {
  const { blog } = req;
  const [details, comments] = await Promise.all([
    blog.populate("author", "-password"),
    Comment.find({ blog: blog._id })
      .populate("author", "-password")
      .select("-blog"),
  ]);
  res.json({
    success: true,
    message: "blog details",
    blog: {
      details,
      comments,
    },
  });
};

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, message: "you must be provide title" });
  }
  if (content.length < 6) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, message: "content is too short" });
  }

  if (tags.length === 0) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, message: "you must be provide tags" });
  }

  const newBlog = new Blog({
    ...req.body,
    author: req.user.userId,
  });

  await newBlog.save();

  res.json({
    success: true,
    message: "you have successfully created",
    blog: newBlog,
  });
};
const updateBlog = async (req, res) => {
  let updatedBlog = {
    ...req.body,
  };
  const published = req.body.published || undefined;
  const blogUpdateCondition = { _id: req.blog._id, author: req.user.userId };
  const blog = await Blog.findOne(blogUpdateCondition);
  if (!blog) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: "post not found" });
  }
  if (req.user.role === "editor" && !!published) {
    return res
      .status(StatusCodes.NOT_MODIFIED)
      .json({ success: false, message: "you are not Permissions" });
  }
  const newUpdatedBlog = await Blog.findOneAndUpdate(
    blogUpdateCondition,
    updatedBlog,
    { new: true }
  );
  // User not authorised to update post or post not found
  if (!newUpdatedBlog)
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: "Post not found or user not authorised",
    });

  res.json({
    success: true,
    message: "updated post was successfully updated",
    post: newUpdatedBlog,
  });
};
const deleteBlog = async (req, res) => {
  const blogDeleteCondition = { _id: req.blog.id, author: req.user.userId };
  const blog = await Blog.findOne(blogDeleteCondition);

  if (!blog) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: "post not found" });
  }

  const deletedBlog = await Blog.findOneAndDelete(blogDeleteCondition);

  if (!deletedBlog)
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "Post not found or user not authorised",
    });

  res.json({
    success: true,
    message: "delete post success",
    blog: deletedBlog,
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
export {
  getAllBlog,
  getOne,
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogByAuthor,
  getDetails,
  getBlogById,
};
