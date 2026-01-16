const {Router} = require("express");
const multer = require('multer');
const { put } = require('@vercel/blob');
const path = require('path');

const Blog = require('../models/blog');
const Comment = require('../models/comment');

const router = Router();

const storage = multer.memoryStorage();

const upload = multer({ storage: storage })

router.get("/add-new", (req, res) =>{
    return res.render("addBlog", {
        user: req.user,
    })
})

router.get('/:id', async (req, res) =>{
    const blog = await Blog.findById(req.params.id).populate('createdBy');
    const comments = await Comment.find({blogId: req.params.id}).populate("createdBy");
    return res.render('blog', {
      user: req.user,
      blog,
      comments,
    });
})

router.post('/comment/:blogId', async (req, res) =>{
    await Comment.create({
      comment: req.body.content,
      blogId: req.params.blogId,
      createdBy: req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`)
})

router.post("/", upload.single('coverImage'), async (req, res) => {
    const { title, body } = req.body;

    try {
        // 1. Upload the file buffer to Vercel Blob
        const blob = await put(req.file.originalname, req.file.buffer, {
            access: 'public',
        });

        // 2. Use the new blob.url for your database
        const blog = await Blog.create({
            body,
            title,
            createdBy: req.user._id,
            coverImageURL: blob.url, // Save the cloud link, not the local path
        });

        return res.redirect(`/blog/${blog._id}`);
    } catch (error) {
        console.error("Blob Upload Error:", error);
        return res.status(500).send("Internal Server Error during upload");
    }
});

module.exports = router;



























