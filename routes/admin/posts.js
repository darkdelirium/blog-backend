const express = require("express");
const Joi = require("joi");

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

router.post("/", (req, res) => {
  const { error } = validatePost(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  const post = {
    id: postsData.length + 1,
    name: req.body.name
  };

  postsData.push(post);
  res.send(post);
});

router.delete("/:id", (req, res) => {
  const post = postsData.find(c => c.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("post not found");
  const index = postsData.indexOf(post);
  postsData.splice(index, 1);
  res.send(post);
});

router.put("/:id", (req, res) => {
  const post = postsData.find(c => c.id === parseInt(req.params.id));
  if (!post) return res.status(404).send("post not found");
  const { error } = validatePost(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  post.name = req.body.name;
  res.send(post);
});

function validatePost(post) {
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(post, schema);
}

module.exports = router;
