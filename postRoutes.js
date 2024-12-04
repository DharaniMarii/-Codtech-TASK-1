const express = require('express');
const Post = require('../models/Post');

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, content } = req.body;

  const newPost = new Post({ userId, content });
  await newPost.save();

  res.status(201).json(newPost);
});

router.get('/', async (req, res) => {
  const posts = await Post.find().populate('userId');
  res.json(posts);
});

module.exports = router;
