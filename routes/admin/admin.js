const router = require("express").Router();
const Admin = require("../../models/Admin");
const Mongoose = require("mongoose");
const cors = require("cors");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Nested routes
const { events } = require("./events");
const { home } = require("./home");
const { articles } = require("./articles");
const { studyguides } = require("./studyguides");

router.use("/events", events);
router.use("/home", home);
router.use("/articles", articles);
router.use("/sguides", studyguides);

router.use(cors());

router.post("/login", (req, res) => {
  const { user, pass } = req.body;
  Admin.findOne({ username: user }).then((result) => {
    if (!result) {
      return null;
    }
    bcrypt.compare(pass, result.password).then(() => {
      const accessToken = jwt.sign({ user, pass }, process.env.A_TOKEN, {
        expiresIn: "2h",
      });
      res.json({ accessToken });
    });
  });
});

module.exports = { admin: router };
