const express = require("express");

const router = express.Router();

const tags = [
  { id: 1, name: "tag1" },
  { id: 2, name: "tag2" },
  { id: 3, name: "tag3" }
];

router.get("/", (req, res) => {
  res.send(tags);
});

router.get("/:id", (req, res) => {
  const tag = tags.find(c => c.id === parseInt(req.params.id));
  if (!tag) return res.status(404).send("tag not found");
  res.send(tag);
});

module.exports = router;
