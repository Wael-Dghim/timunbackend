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
  const { username, pass } = req.body;
  Admin.findOne({ username }).then((user) => {
    if (user) {
      bcrypt.compare(pass, user.password, (error, result) => {
        if (error) res.json({ message: "An error occured", err });
        if (result) {
          let token = jwt.sign(
            { name: user.name },
            "028b1e10bee489f12203aba9dfed0bb6ff77e0cee1fb73263de885a0bd51bf342988912302eec9c19b6821a59ad96676dd21974a776df4b3a050578c6212a404",
            {
              expiresIn: "2h",
            }
          );
          res.json({
            message: "Login Successful",
            user,
            token,
          });
        } else {
          res.json({ message: "Wrong password" });
        }
      });
    } else {
      res.json({
        message:
          "User not found! Please make sure you entered the correct information",
      });
    }
  });
});

router.get("/login", (req, res) => {
  res.sendStatus(200);
});

module.exports = { admin: router };
