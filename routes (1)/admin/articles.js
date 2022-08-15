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
  newArticle.save().then((doc) => {
    res.json({ message: "doc added" });
  });
});

router.put("/", (req, res) => {
  const updatedArticle = req.body;
  Article.updateOne({ _id: updatedArticle._id }, { $set: updatedArticle }).then(
    () => res.json({ message: "doc updated" })
  );
  console.log(updatedArticle);
});

router.delete("/", (req, res) => {
  Article.deleteOne({ _id: req.body._id }).then((doc) =>
    res.json({ message: "doc deleted" })
  );
});

module.exports = { articles: router };
