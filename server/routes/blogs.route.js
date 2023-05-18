import express from "express";
import passport from "passport";

import {
  getAllBlog,
  getOne,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get(
  "/getall",
  passport.authenticate("bearer", { session: false }),
  getAllBlog
);

router.get(
  "/getone/:id",
  passport.authenticate("bearer", { session: false }),
  getOne
);

router.put(
  "/update/:id",
  passport.authenticate("bearer", { session: false }),
  updateBlog
);

router.post(
  "/create",
  passport.authenticate("bearer", { session: false }),
  createBlog
);

router.delete(
  "/delete/:id",
  passport.authenticate("bearer", { session: false }),
  deleteBlog
);

export default router;
