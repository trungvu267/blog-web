import { StatusCodes } from "http-status-codes";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import Article from "../models/article.model.js";
import { randomImageName } from "../helper.js";
import s3 from "../config/s3.js";
import sharp from "sharp";
import { getImageUrl } from "../helper.js";
import config from "../config/config.js";

export default {
  getAll: async (req, res, next) => {
    // TODO: add sorting
    const blogs = await Article.find().populate({
      path: "author",
      select: "name email",
    });
    res.jsonp(blogs);
  },
  getListPublished: async (req, res, next) => {
    // TODO: add sorting
    const blogs = await Article.find({ published: true })
      .populate({ path: "author", select: "name email" })
      .populate({ path: "tags" })
      .select("-content");
    res.jsonp(blogs);
    res.jsonp({ message: "Hello" });
  },
  getAllArticleByAuthor: async (req, res) => {
    const { userId } = req.params;
    const blogs = await Article.find({ author: userId });
    res.json(blogs);
  },
  getOne: async (req, res) => {
    res.json({ success: true, message: "find post success", blog: req.blog });
  },

  getDetails: async (req, res) => {
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
  },
  create: async (req, res) => {
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

    const newArticle = new Article({
      ...req.body,
      author: req.user.userId,
    });

    await newArticle.save();

    res.json({
      success: true,
      message: "you have successfully created",
      blog: newArticle,
    });
  },
  update: async (req, res) => {
    let updatedArticle = {
      ...req.body,
    };
    const published = req.body.published || undefined;
    const blogUpdateCondition = { _id: req.blog._id, author: req.user.userId };
    const blog = await Article.findOne(blogUpdateCondition);
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
    const newUpdatedArticle = await Article.findOneAndUpdate(
      blogUpdateCondition,
      updatedArticle,
      { new: true }
    );
    // User not authorised to update post or post not found
    if (!newUpdatedArticle)
      return res.status(StatusCodes.FORBIDDEN).json({
        success: false,
        message: "Post not found or user not authorised",
      });

    res.json({
      success: true,
      message: "updated post was successfully updated",
      post: newUpdatedArticle,
    });
  },
  delete: async (req, res) => {
    const blogDeleteCondition = { _id: req.blog.id, author: req.user.userId };
    const blog = await Article.findOne(blogDeleteCondition);

    if (!blog) {
      return res
        .status(StatusCodes.NOT_FOUND)
        .json({ success: false, message: "post not found" });
    }

    const deletedArticle = await Article.findOneAndDelete(blogDeleteCondition);

    if (!deletedArticle)
      return res.status(StatusCodes.NOT_FOUND).json({
        success: false,
        message: "Post not found or user not authorised",
      });

    res.json({
      success: true,
      message: "delete post success",
      blog: deletedArticle,
    });
  },
  upLoadTitleImage: async (req, res) => {
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
  },
  publish: async (req, res) => {
    let updatedArticle = {
      ...req.body,
    };
    const published = req.body.published || undefined;
    const blogUpdateCondition = { _id: req.blog._id };
    if (req.user.role === "editor" && !!published) {
      return res
        .status(StatusCodes.NOT_MODIFIED)
        .json({ success: false, message: "you are not Permissions" });
    }
    const newUpdatedArticle = await Article.findOneAndUpdate(
      blogUpdateCondition,
      updatedArticle,
      { new: true }
    );
    res.json({
      success: true,
      message: "updated post was successfully updated",
      post: newUpdatedArticle,
    });
  },
  getArticleById: (req, res, next, id) => {
    Article.findById(id)
      .then((blog) => {
        req.blog = blog;
        next();
      })
      .catch((err) => {
        console.log(err);
        const notFound = new Error("Article not found");
        next(notFound);
      });
  },

  // Create a new blog
};
