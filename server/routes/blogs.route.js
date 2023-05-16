import express from "express";
import passport from "passport";

import { getAllBlog, getOne, createBlog, updateBlog, deleteBolg } from "../controllers/blog.controller.js";

const router = express.Router();

// @route GET /blogs/getall
// @desc Get blogs
// @access Private
router.get('/getall', passport.authenticate("bearer", { session: false }), getAllBlog)

// @route GET /blogs/getone/:id
// @desc Get blogs
// @access Private
router.get('/getone/:id', passport.authenticate("bearer", { session: false }), getOne)

// @route Put /blogs/update
// @desc Put blogs
// @access Private
router.put('/update/:id', passport.authenticate("bearer", { session: false }), updateBlog)

// @route POST /blogs/create
// @desc Create blogs
// @access Private
router.post('/create', passport.authenticate("bearer", { session: false }), createBlog)

// @route /delete/:id
// @desc delete
// @access Private
router.delete('/delete/:id', passport.authenticate("bearer", { session: false }), deleteBolg)

export default router;