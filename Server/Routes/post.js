const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.post("/createpost", requireLogin, (req, response) => {
  const { title, body } = req.body;
  if (!title || !body) {
    return response
      .status(422)
      .json({ error: "Title or Body can't be empty!" });
  }
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    postedByUser: req.user,
  });
  post.save().then((result) => {
    response.json({ post: result });
  });
});

router.get("/allpost", (req, res) => {
  Post.find()
    .populate("postedByUser", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myposts", requireLogin, (req, res) => {
  Post.find({ postedByUser: req.user._id })
    .populate("postedByUser", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
