import { Schema, model } from "mongoose";
const Bookmark = new Schema(
  {
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    isBookmarked: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default model("Bookmark", Bookmark);
