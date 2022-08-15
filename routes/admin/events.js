const router = require("express").Router();
const Mongoose = require("mongoose");
const Event = require("../../models/Event");

router.post("/", (req, res) => {
  const { name, cover, date, mandate, status, drive, sponsors, description } =
    req.body;
  const newEvent = new Event({
    name,
    cover,
    date,
    status,
    mandate,
    drive,
    sponsors,
    description,
  });
  newEvent.save().then((doc) => {
    res.json(doc);
  });
});

router.put("/", (req, res) => {
  const updatedEvent = req.body;
  Event.updateOne({ _id: updatedEvent._id }, { $set: updatedEvent }).then(
    (rep) => console.log(rep)
  );
});

router.delete("/", (req, res) => {
  Event.deleteOne({ _id: req.body._id }).then(() =>
    res.json({ message: "doc deleted" })
  );
});

module.exports = { events: router };
