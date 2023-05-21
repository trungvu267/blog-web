import { Schema, model } from "mongoose";
const Tag = new Schema(
  {
    name: {
      type: String,
      required: [true, "tag name must be required"],
      unique: true,
    },
    bg_color: {
      type: String,
      default: "#252525",
    },
    text_color: {
      type: String,
      default: "#252525",
    },
  },
  { timestamps: true }
);

export default model("Tag", Tag);
