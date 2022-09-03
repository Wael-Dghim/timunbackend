const router = require("express").Router();
const Mongoose = require("mongoose");
const Studyguide = require("../../models/Studyguide");

router.post("/", (req, res) => {
  const { title, author, date, organ, content, full, event } = req.body;
  const newSGuide = new Studyguide({
    title,
    author,
    date,
    organ,
    content,
    full,
    event,
  });
  newSGuide.save();
});

router.put("/", (req, res) => {
  const updatedSGuide = req.body;
  Studyguide.updateOne({ _id: updatedSGuide._id }, { $set: updatedSGuide });
});

router.delete("/", (req, res) => {
  Studyguide.deleteOne({ _id: req.body._id }).then(() => {
    console.log("hh")
  });
});

module.exports = { studyguides: router };
