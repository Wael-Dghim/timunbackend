const router = require("express").Router();
const Mongoose = require("mongoose");
const Team = require("../../models/home");

router.post("/teams", (req, res) => {
  const { name, position, img, desc, accounts } = req.body;
  const newTeam = new Team({
    name,
    position,
    img,
    desc,
    accounts,
  });
  newTeam.save().then((doc) => {
    res.json(doc);
  });
});

router.put("/teams", (req, res) => {
  const updatedTeam = req.body;
  Team.updateOne({ _id: updatedTeam._id }, { $set: updatedTeam }).then(() =>
    res.json({ message: "doc updated" })
  );
});

router.delete("/teams", (req, res) => {
  Team.deleteOne({ _id: req.body._id }).then(() =>
    res.json({ message: "doc deleted" })
  );
});

module.exports = { home: router };
