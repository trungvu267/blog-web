import Tag from "../models/tag.model.js";
import { StatusCodes } from "http-status-codes";

const getAllTags = async (req, res, next) => {
  const tags = await Tag.find();
  res.json(tags);
};
const getOneTag = async (req, res, next) => {
  res.json({ success: true, message: "find post success", tag: req.tag });
};

const createTag = async (req, res) => {
  if (req.user.role === "editor") {
    return res
      .status(StatusCodes.NOT_MODIFIED)
      .json({ success: false, message: "you are not Permissions" });
  }
  if (!req.body.name) {
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json({ success: false, message: "tag name must be required" });
  }
  const newTag = new Tag(req.body);
  await newTag.save();

  res.json({
    success: true,
    message: "you have successfully created",
    tag: newTag,
  });
};

const updateTag = async (req, res) => {
  let updateTag = {
    ...req.body,
  };

  const tagUpdateCondition = {
    _id: req.tag._id,
  };
  const tag = await Tag.findOne(tagUpdateCondition);
  if (!tag) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: "tag not found" });
  }
  if (req.user.role === "editor") {
    return res
      .status(StatusCodes.NOT_MODIFIED)
      .json({ success: false, message: "you are not Permissions" });
  }
  const newUpdateTag = await Tag.findOneAndUpdate(
    tagUpdateCondition,
    updateTag,
    { new: true }
  );
  // User not authorised to update post or post not found
  if (!newUpdateTag)
    return res.status(StatusCodes.FORBIDDEN).json({
      success: false,
      message: "tag not found or user not authorised",
    });

  res.json({
    success: true,
    message: "updated tag was successfully updated",
    tag: newUpdateTag,
  });
};
const deleteTag = async (req, res) => {
  if (req.user.role === "editor") {
    return res
      .status(StatusCodes.NOT_MODIFIED)
      .json({ success: false, message: "you are not Permissions" });
  }
  const TagDeleteCondition = { _id: req.tag.id };
  const tag = await Tag.findOne(TagDeleteCondition);

  if (!tag) {
    return res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: "tag not found" });
  }

  const deletedTag = await Tag.findOneAndDelete(TagDeleteCondition);

  if (!deletedTag)
    return res.status(StatusCodes.NOT_FOUND).json({
      success: false,
      message: "tag not found or user not authorised",
    });

  res.json({
    success: true,
    message: "delete tag success",
    tag: deletedTag,
  });
};

const getTagId = (req, res, next, id) => {
  Tag.findById(id)
    .then((tag) => {
      req.tag = tag;
      next();
    })
    .catch((err) => {
      console.log(err);
      const notFound = new Error("Tag not found");
      next(notFound);
    });
};

export { getAllTags, getOneTag, createTag, updateTag, deleteTag, getTagId };
