require("dotenv").config();
const Express = require("express");

//Middlewares
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

//DB
const Mongoose = require("mongoose");

//AdminRoute
const { admin } = require("./routes/admin/admin.js");

const { events } = require("./routes/events");

//Models
const Team = require("./models/home");
const Studyguide = require("./models/Studyguide");
const Event = require("./models/Event");
const Training = require("./models/Training");
const Article = require("./models/Article");

//App
const app = Express();

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//Routing
// app.use("/sguides", sguides);
app.use("/events", events);
app.use("/admin", admin);
// app.use("/articles", articles);
// app.use("/home", home);

app.get("/sguides", (req, res) => {
  Studyguide.find()
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/home/teams", (req, res) => {
  Team.find().then((data) => {
    res.json(data);
  });
});

app.get("/articles", (req, res) => {
  Article.find()
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    });
});

app.get("/trainings", (req, res) => {
  Training.find().then((data) => {
    res.json(data);
  });
});

Mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(
      3200,
      console.log("Server is live on port 3200...", "DB Connected")
    );
  })
  .catch((err) => console.log(err));
