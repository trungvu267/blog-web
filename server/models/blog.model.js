import { Schema, model } from "mongoose";
const BlogSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "you must be provide title"],
      //   minLength: 6,
      //   maxLength: 20,
    },

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
    published: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

//TODO: create preSave fn that return timeToRead
export default model("Blog", BlogSchema);
