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
  console.log(req.body);
  Event.updateOne({ _id: req.body._id }, { $set: { status: "inactive" } }).then(
    (rep) => {
      console.log(rep);
    }
  );
});

module.exports = { events: router };
