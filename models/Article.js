const Mongoose = require("mongoose");

const articleSchema = new Mongoose.Schema({
  title: String,
  articles: [String],
  author: String,
  content: String,
  date: Date,
  description: String,
});

module.exports = Mongoose.model("article", articleSchema);
