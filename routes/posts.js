const express = require("express");

const router = express.Router();

const postsData = [
  { id: 1, name: "post1" },
  { id: 2, name: "post2" },
  { id: 3, name: "post3" }
];

router.get("/", (req, res) => {
  res.send(postsData);
});

router.get("/:id", (req, res) => {
  const post = postsData.find(c => c.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("post not found");
  res.send(post);
});

module.exports = router;
