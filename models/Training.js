const Mongoose = require("mongoose");

const trainingSchema = new Mongoose.Schema({
  title: String,
  date: Date,
  author: String,
  organ: String,
  content: String,
  full: String,
  event: String,
});

module.exports = Mongoose.model("training", trainingSchema);
