const router = require("express").Router();
const Mongoose = require("mongoose");
const Article = require("../../models/Article");

router.post("/", (req, res) => {
  const { title, articles, author, content, img, date } = req.body;
  const newArticle = new Article({
    title,
    articles,
    author,
    content,
    img,
    date,
  });
  newArticle.save();
});

router.put("/", (req, res) => {
  const updatedArticle = req.body;
  Article.updateOne({ _id: updatedArticle._id }, { $set: updatedArticle });
});

router.delete("/", (req, res) => {
  Article.deleteOne({ _id: req.body._id });
});

module.exports = { articles: router };
