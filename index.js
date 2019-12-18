const express = require("express");
const Joi = require("joi");
const posts = require("./routes/posts.js");
const tags = require("./routes/tags.js");
const dummyHome = require("./routes/dummyhome.js");
const adminPosts = require("./routes/admin/posts.js");

const app = express();
app.use(express.json());
app.use("/api/posts", posts);
app.use("/api/tags", tags);
app.use("/", dummyHome);
app.use("/admin/api/posts", adminPosts);

console.log("BlogPost v0.1.0");
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`server started on port ${port}`));
