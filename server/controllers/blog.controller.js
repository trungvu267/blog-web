import { StatusCodes } from "http-status-codes";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import Blog from "../models/blog.model.js";
import { randomImageName } from "../helper.js";
import s3 from "../config/s3.js";
import sharp from "sharp";
import { getImageUrl } from "../helper.js";
import config from "../config/config.js";

const getAllBlog = async (req, res, next) => {
  // TODO: add sorting
  const blogs = await Blog.find().populate({
    path: "author",
    select: "name email",
  });
  res.jsonp(blogs);
};
const getListPublishBlog = async (req, res, next) => {
  // TODO: add sorting
  const blogs = await Blog.find({ published: true })
    .populate({ path: "author", select: "name email" })
    .populate({ path: "tags" })
    .select("-content");
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

  await blog.populate([
    { path: "author", select: "name email" },
    { path: "tags" },
  ]),
    res.json({
      success: true,
      message: "blog details",
      blog: {
        details: blog,
      },
    });
};

// Create a new blog
const createBlog = async (req, res) => {
  const { title, content, tags } = req.body;
  if (!title) {
    const error = new Error("Chưa có tiêu đề bài viết");
    error.statusCode = StatusCodes.BAD_REQUEST;
    throw error;
  }
  if (content.length < 6) {
    const error = new Error("Nội dung bài viết quá ngắn");
    error.statusCode = StatusCodes.BAD_REQUEST;
    throw error;
  }
  if (tags.length === 0) {
    const error = new Error("Phải có ít nhất một danh mục bài viết");
    error.statusCode = StatusCodes.BAD_REQUEST;
    throw error;
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
const upLoadTitleImage = async (req, res) => {
  const folder = "blog-title";
  const imageName = randomImageName();
  const key = `${folder}/${imageName}`;
  const buffer = await sharp(req.file.buffer)
    .resize({ width: 1200, fit: "contain" })
    .toBuffer();
  const params = {
    Bucket: config.aws.bucketName,
    Key: key,
    Body: buffer,
    ContentType: req.file.mimetype,
  };
  const command = new PutObjectCommand(params);
  await s3.send(command);
  const imageLink = await getImageUrl(key);

  res.json({ imageLink });
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
  getListPublishBlog,
  upLoadTitleImage,
};
