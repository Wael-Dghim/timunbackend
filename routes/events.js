const router = require("express").Router();
const Mongoose = require("mongoose");
const Event = require("../models/Event");

router.get("/", (req, res) => {
  Event.find()
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    });
});

router.put("/countend", (req, res) => {
  Event.updateOne({ _id: req.body._id }, { $set: { status: "inactive" } });
});

module.exports = { events: router };
