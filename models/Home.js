const Mongoose = require("mongoose");

const teamSchema = new Mongoose.Schema({
  name: String,
  position: String,
  src: String,
  description: String,
  accounts: { facebook: String, insta: String, linkedin: String },
});

const aboutSchema = new Mongoose.Schema({
  name: String,
  text: String,
  src: String,
});

module.exports = {
  Team: Mongoose.model("team", teamSchema),
  About: Mongoose.model("about", aboutSchema),
};
