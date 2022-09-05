var express = require("express");
var router = express.Router();
var cors = require("cors");
var bodyParser = require("body-parser");

// if (process.env.NODE_ENV == "production") {
// }

var app = express();
app.use(
  cors({
    origin: ["https://master.djf2f3efc4uda.amplifyapp.com"],
    optionsSuccessStatus: 200,
    methods: ["POST", "GET"],
  })
);

app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// var project1 = express();
// app.use("/project", project);
app.use("/project", require("./project"));

/* GET home page. */
app.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = app;
