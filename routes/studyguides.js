const router = require("express").Router();
const Studyguide = require("../models/Studyguide");

router.get("/", (req, res) => {
  Studyguide.find()
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    });
});

module.exports = { sguides: router };
