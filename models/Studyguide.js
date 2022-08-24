const Mongoose = require("mongoose");

const SGSchema = new Mongoose.Schema({
  title: String,
  date: Date,
  author: String,
  organ: String,
  content: String,
  full: String,
  event: String,
  language: String,
});

module.exports = Mongoose.model("studyguide", SGSchema);
