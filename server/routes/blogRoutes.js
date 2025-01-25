import express from "express";
import asyncWrapper from "../wrapper/asyncWrapper.js";
import { isAdmin, isAuth } from "../utils.js";
import Blog from "../models/blogModel.js";

const blogRouter = express.Router();

blogRouter.post(
  "/",
  isAuth,
  isAdmin,
  asyncWrapper(async (req, res) => {
    const { title, content, keywords } = req.body;
    const blog = new Blog({
      title,
      content,
      keywords,
    });
    const newBlog = await blog.save();
    res.status(201).send(newBlog);
  })
);

blogRouter.get(
  "/",
  asyncWrapper(async (req, res) => {
    const blogs = await Blog.find({});
    res.send(blogs);
  })
);

export default blogRouter;
