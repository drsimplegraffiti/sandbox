const express = require('express');
const router = express.Router();
const Post = require('../models/Post');




// GET all post
router.get('/', async(req, res) => {
    // res.send('post routes active');
    try {
        const posts = await Post.find();
        res.json(posts);

    } catch (err) {
        res.json({ message: err })
    }
})

// POST Create a new post
router.post('/', async(req, res) => {
    // console.log(req.body);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await post.save()
        res.json(savedPost);
    } catch (err) {
        res.json({ message: err })
    }

})

// GET specific post
router.get('/:postId', async(req, res) => {
    try {
        // console.log(req.params.postId);
        const post = await Post.findById(req.params.postId)
        res.json({ post, message: "post gotten successfully" })
    } catch (err) {
        res.json({ message: err })
    }
})

// Delete specific post
router.delete('/:postId', async(req, res) => {
    try {
        const removedPost = await Post.findByIdAndDelete({ _id: req.params.postId })
        res.json({ removedPost, message: "post deleted" });

    } catch (err) {
        res.json({ message: err })
    }
})

//Update a specific post
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
        res.json({ updatedPost })
    } catch (err) {
        res.json({ message: err })
    }
})

module.exports = router;