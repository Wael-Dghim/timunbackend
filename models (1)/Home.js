const Mongoose = require("mongoose");

const teamSchema = new Mongoose.Schema({
  name: String,
  position: String,
  src: String,
  description: String,
  accounts: { facebook: String, insta: String, linkedin: String },
});

module.exports = Mongoose.model("team", teamSchema);
