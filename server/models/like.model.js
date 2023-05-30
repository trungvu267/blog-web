import { Schema, model } from "mongoose";
const Like = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    blog: {
      type: Schema.Types.ObjectId,
      ref: "Blog",
      required: true,
    },
    isLiked: {
      type: Boolean,
      required: true,
      default: true,
    },
  },
  { timestamps: true }
);

export default model("Like", Like);
