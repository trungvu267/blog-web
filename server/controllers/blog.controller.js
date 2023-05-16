import Blog from "../models/blog.model.js";
import { StatusCodes } from "http-status-codes";

const getAllBlog = async(req, res) => {
    try {
        const blog = await Blog.find({ author: req.user.userId, }).populate('author', [
            'name'
        ])
        res.json({ success: true, blog })
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal server error' })
    }
}

const getOne = async(req, res) => {
    try {
        const blogCondition = { _id: req.params.id, author: req.user.userId }
        const blog = await Blog.findOne(blogCondition)

        if (!blog) {
            return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'post not found' })
        }

        res.json({ success: true, message: 'fin post success', blog: blog })
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal server error' })
    }

}


// Create a new blog
const createBlog = async(req, res) => {
    const { title, content } = req.body

    if (!title) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: 'you must be provide title' })
    }
    if (!(content.length > 6)) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: 'you must be provide content' })
    }

    if (!(req.user.role === "administrator")) {
        return res.status(StatusCodes.FORBIDDEN).json({ success: false, message: 'You do not have permission to edit' })
    }


    try {
        const newBlog = new Blog({
            title,
            content,
            author: req.user.userId,

        })

        await newBlog.save()

        res.json({ success: true, message: 'you have successfully created', blog: newBlog })
    } catch (error) {
        console.log(error)
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal server error' })
    }
}
const updateBlog = async(req, res) => {
    const { title, content, published } = req.body

    // Simple validation
    if (!title) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: 'you must be provide title' })
    }
    if (!(content.length > 6)) {
        return res.status(StatusCodes.BAD_REQUEST).json({ success: false, message: 'you must be provide content' })
    }
    if (!(req.user.role === "administrator")) {
        return res.status(StatusCodes.FORBIDDEN).json({ success: false, message: 'You do not have permission to edit' })
    }


    try {
        let updatedBlog = {
            title,
            content,
            published: published ? published : false
        }

        const blogUpdateCondition = { _id: req.params.id, author: req.user.userId }

        const blog = await Blog.findOne(blogUpdateCondition)
        if (!blog) {
            return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'post not found' })
        }

        const newupdatedBlog = await Blog.findOneAndUpdate(
            blogUpdateCondition,
            updatedBlog, { new: true }
        )

        // User not authorised to update post or post not found
        if (!newupdatedBlog)
            return res.status(StatusCodes.FORBIDDEN).json({
                success: false,
                message: 'Post not found or user not authorised'
            })

        res.json({
            success: true,
            message: 'updated post was successfully updated',
            post: newupdatedBlog
        })
    } catch (error) {
        console.log(error)
        res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal server error' })
    }
}
const deleteBolg = async(req, res) => {
    try {
        const blogDeleteCondition = { _id: req.params.id, author: req.user.userId }
        const blog = await Blog.findOne(blogDeleteCondition)

        if (!blog) {
            return res.status(StatusCodes.NOT_FOUND).json({ success: false, message: 'post not found' })
        }

        const deletedBlog = await Blog.findOneAndDelete(blogDeleteCondition)

        // User not authorised or post not found
        if (!deletedBlog)
            return res.status(StatusCodes.NOT_FOUND).json({
                success: false,
                message: 'Post not found or user not authorised'
            })

        res.json({ success: true, message: 'delete post success', blog: deletedBlog })
    } catch (error) {
        console.log(error)
        res.status(INTERNAL_SERVER_ERROR).json({ success: false, message: 'Internal server error' })
    }
}

export { getAllBlog, getOne, createBlog, updateBlog, deleteBolg }