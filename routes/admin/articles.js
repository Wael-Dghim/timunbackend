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
  newArticle.save().then(() => {
    res.json({
      success: true,
    });
  });
});

router.put("/", (req, res) => {
  const updatedArticle = req.body;
  Article.updateOne({ _id: updatedArticle._id }, { $set: updatedArticle }).then(
    () => {
      res.json({
        success: true,
      });
    }
  );
});

router.delete("/", (req, res) => {
  Article.deleteOne({ _id: req.body._id }).then(() => {
    res.json({
      success: true,
    });
  });
});

module.exports = { articles: router };
