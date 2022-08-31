const router = require("express").Router();
const Article = require("../models/Article");

router.get("/", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    });
});

module.exports = { articles: router };
