import { Schema, model } from "mongoose";
const React = new Schema(
  {
    category: {
      type: String,
      enum: ["like", "unicorn", "heart"],
      default: "like",
    },
  },
  { timestamps: true }
);

export default model("React", React);
