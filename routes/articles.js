const router = require("express").Router();
const Article = require("../models/Article");

router.get("/", (req, res) => {
  Article.find().then((data) => {
    res.json(data);
  });
});

module.exports = { articles: router };
