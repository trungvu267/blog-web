import User from "../models/user.model.js";
import { StatusCodes } from "http-status-codes";

export default {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
      res
        .status(StatusCodes.BAD_REQUEST)
        .json({ msg: "Please, provide email and password!!!" });
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Email was wrong" });
      return;
    }
    const isCorrectPassword = await user.comparePassword(password);
    if (!isCorrectPassword) {
      res.status(StatusCodes.UNAUTHORIZED).json({ msg: "Password was wrong" });
      return;
    }
    const token = user.createJWT();
    res
      .status(200)
      .json({ userName: user.name, email: user.email, token, role: user.role });
  },

  register: async (req, res, next) => {
    const { email, password, name } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const user = new User({ email, name, password, role: "editor" });
    await user.save();
    const token = user.createJWT();
    res.status(201).json({
      userName: user.name,
      email: user.email,
      role: user.role,
      token,
    });
  },
};
