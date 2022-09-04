const Mongoose = require("mongoose");

const eventSchema = new Mongoose.Schema({
  name: String,
  cover: String,
  date: Date,
  status: String,
  drive: String,
  aftermovie: String,
  sponsors: [String],
  description: String,
  location: String,
});

module.exports = Mongoose.model("event", eventSchema);
