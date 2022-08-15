const Mongoose = require("mongoose");

const articleSchema = new Mongoose.Schema({
  title: String,
  articles: [String],
  author: String,
  content: String,
  img: String,
  date: Date,
});

module.exports = Mongoose.model("article", articleSchema);
