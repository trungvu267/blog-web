import { Schema, model } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// NOTE: cần kiểm tra lại
const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "you must be provide name "],
      minLength: 6,
      maxLength: 20,
    },
    email: {
      type: String,
      required: [true, "Please provide email"],
      match: [
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Please provide a valid email",
      ],
      unique: true,
    },
    googleId: {
      type: String,
      default: null,
    },
    avatarLink: {
      type: String,
      default: null,
    },
    password: {
      type: String,
      // required: [true, "you must be provide password"],
      minlength: 6,
    },
    role: {
      type: String,
      enum: ["editor", "administrator"],
      default: "editor",
    },
  },
  { timestamps: true }
);

UserSchema.pre("save", async function (next) {
  if (this.googleId) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

UserSchema.methods.createJWT = function () {
  if (this.googleId) {
    return jwt.sign(
      { userId: this._id, name: this.name, googleId: this.googleId },
      process.env.JWT_SECRET,
      { expiresIn: process.env.JWT_TIME_LIFE }
    );
  }
  return jwt.sign(
    { userId: this._id, name: this.name, role: this.role },
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_TIME_LIFE }
  );
};
UserSchema.methods.comparePassword = async function (isComingPassword) {
  const isMatch = await bcrypt.compare(isComingPassword, this.password);
  return isMatch;
};

export default model("User", UserSchema);
