const router = require("express").Router();
const Mongoose = require("mongoose");
const Studyguide = require("../../models/Studyguide");

router.post("/", (req, res) => {
  const { title, author, date, organ, content, full, event, language } =
    req.body;
  const newSGuide = new Studyguide({
    title,
    author,
    date,
    organ,
    content,
    full,
    event,
    language,
  });
  newSGuide.save().then(() => {
    res.json({
      success: true,
    });
  });
});

router.put("/", (req, res) => {
  const updatedSGuide = req.body;
  Studyguide.updateOne(
    { _id: updatedSGuide._id },
    { $set: updatedSGuide }
  ).then(() => {
    res.json({
      success: true,
    });
  });
});

router.delete("/", (req, res) => {
  Studyguide.deleteOne({ _id: req.body._id }).then(() => {
    res.json({
      success: true,
    });
  });
});

router.get("/", (req, res) => {
  res.sendStatus(200);
});

module.exports = { studyguides: router };
