const router = require("express").Router();
const home = require("../models/Home");

router.get("/teams", (req, res) => {
  home.Team.find().then((data) => {
    res.json(data);
  });
});

router.get("/", (req, res) => {
  home.About.find().then((data) => {
    res.json(data);
  });
});

module.exports = { home: router };
