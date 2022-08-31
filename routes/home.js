const router = require("express").Router();
const Team = require("../models/Home");

router.get("/teams", (req, res) => {
  Team.find().then((data) => {
    res.json(data);
  });
});

module.exports = { home: router };
