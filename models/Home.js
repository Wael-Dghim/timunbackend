const Mongoose = require("mongoose");

const teamSchema = new Mongoose.Schema({
  name: String,
  position: String,
  src: String,
  description: String,
  accounts: { facebook: String, insta: String, linkedin: String },
});

const aboutSchema = new Mongoose.Schema({
  title1: String,
  title2: String,
  text1: String,
  src1: String,
  text2: String,
  src2: String,
  link1: String,
  link2: String,
});

module.exports = {
  Team: Mongoose.model("team", teamSchema),
  About: Mongoose.model("about", aboutSchema),
};
