import { Schema, model } from "mongoose";
// TODO:  rename model name
//  TODO: add page

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
    imageLink: {
      type: String,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    tags: {
      type: [
        {
          type: Schema.Types.ObjectId,
          ref: "Tag",
        },
      ],
      minlength: [1, "Blog must contain at least one tag"],
    },
    published: {
      type: Boolean,
      default: false,
    },
    //NOTE: field này dùng để đặt tên không dấu cho bài viết, chỉ admin có quyền sửa
    slug: {
      type: String,
      default: null,
    },
  },
  { timestamps: true }
);

//TODO: create preSave fn that return timeToRead
export default model("Blog", BlogSchema);
