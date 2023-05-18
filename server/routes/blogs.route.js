import express from "express";
import passport from "passport";
import asyncWrapper from "../middleware/asyncWrapper.js";
import {
  getAllBlog,
  getOne,
  createBlog,
  updateBlog,
  deleteBlog,
} from "../controllers/blog.controller.js";

const router = express.Router();

router.get(
  "/",
  passport.authenticate("bearer", { session: false }),
  asyncWrapper(getAllBlog)
);

router.get("/:id", passport.authenticate("bearer", { session: false }), getOne);

router.put(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  asyncWrapper(updateBlog)
);

router.post(
  "/",
  passport.authenticate("bearer", { session: false }),
  asyncWrapper(createBlog)
);

router.delete(
  "/:id",
  passport.authenticate("bearer", { session: false }),
  asyncWrapper(deleteBlog)
);

export default router;
