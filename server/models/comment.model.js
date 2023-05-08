import { Schema, model } from "mongoose";
const CommentSchema = new Schema(
  {
    content: {
      type: String,
      required: [true, "you must be provide content"],
      minlength: 6,
    },
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
  },
  { timestamps: true }
);

export default model("Comment", CommentSchema);
