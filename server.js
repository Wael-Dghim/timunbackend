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
const { sguides } = require("./routes/studyguides.js");
const { home } = require("./routes/home.js");
const { articles } = require("./routes/articles.js");
const { events } = require("./routes/events");

//App
const app = Express();

//Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("dev"));

//Routing
app.use("/sguides", sguides);
app.use("/events", events);
app.use("/admin", admin);
app.use("/articles", articles);
app.use("/home", home);

//AWS EB health check
app.get("/", (req, res) => {
  res.sendStatus(200);
});

Mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    app.listen(process.env.PORT || 3200);
  })
  .catch((err) => console.log(err));
