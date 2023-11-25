// Create web server

// Require modules
const express = require('express');
const router = express.Router();
const Comment = require('../models/Comment');
const Post = require('../models/Post');

// Create comment
router.post('/new/:id', (req, res) => {
    // Create comment
    Comment.create({
        content: req.body.content,
        