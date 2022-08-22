// const express = require("express");
// const logger = require("morgan");
// const cors = require("cors");

// const app = express();
// var router = express.Router();

// // router.get("/", function (req, res, next) {
// //   res.render("index", { title: "Express" });
// // });

// // enable middleware thingy
// var bodyParser = require("body-parser");
// //not sure what "extended: false" is for
// // app.use(bodyParser.urlencoded({ extended: false }));
// // app.use(bodyParser.json());

// // router.get("/", function (req, res, next) {
// //   res.render("index", { title: "Express" });
// // });

// app.use(logger("dev"));
// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// //use cors to allow cross origin resource sharing
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     credentials: true,
//   })
// );

// // let data = [];

// // app.post("/users", function (req, res) {
// //   const newEntry = {
// //     id: req.body.id,
// //     username: req.body.username,
// //     // BookID: req.body.bookID,
// //     // Title: req.body.bookTitle,
// //     // Author: req.body.bookAuthor,
// //   };

// //   data.push(newEntry);
// //   console.log(data);
// // });

// // app.get("/users", function (req, res, next) {
// //   //res.send('respond with a resource');
// //   res.json([
// //     { id: 1, username: "julia" },
// //     { id: 2, username: "ariane" },
// //   ]);
// // });
// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// // app.listen(3001, function () {
// //   console.log("CORS-enabled web server listening on port 3001");
// // });

// // // //start your server on port 3001
// // app.listen(3001, () => {
// //   console.log("Server Listening on port 3001");
// // });

// module.exports = router;
