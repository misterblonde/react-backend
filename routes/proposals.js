// var express = require("express");
// var app = express();
// var users = require("./users");
// var bodyParser = require("body-parser");

// //not sure what "extended: false" is for
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// app.post("/users", (req, res, next) => {
//   console.log(req.body);
//   var result = compute.myfunction(req.body);
//   res.status(200).json(result);
// });

// let express = require("express");
// let router = express.router();
// router.listen(3001, () => console.log("Server running on port 3001!"));

// const app = express();

// //   const bodyParser = require("body-parser");
// //   const router = express.Router();

// //Here we are configuring express to use body-parser as middle-ware.
// //   app.use(bodyParser.urlencoded({ extended: false }));
// //   app.use(bodyParser.json());

// app.use(express.urlencoded({ extended: false }));
// app.use(express.json());

// app.post("/users", (request, response) => {
//   //code to perform particular action.
//   // let example = [{ id: 3, username: "julika" }];
//   // let myJson = request.body; // your JSON
//   // // let myValue = request.body.myKey;	// a value from your JSON
//   response.send({ id: 3, username: "julika" }); // echo the result back
//   //To access POST variable use req.body()methods.
//   // console.log(request.body);
// });

// proposals.get('/:txHash', (req, res) => {
//     res.send('The proposalId is ' + req.params.proposalId + '\n');
// });

// proposals.use(express.json());

// proposals.post('/', (req, res) => {
//     res.json(req.body);
// });

// let MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/";

// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/transactions";

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   console.log("Database created!");
//   db.close();
// });

// MongoClient.connect(url, function (err, db) {
//   if (err) throw err;
//   var dbo = db.db("transactions");
//   dbo.createCollection("proposals", function (err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// router.post("/", (req, res) => {
//   MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("transactions"); // name of database
//     dbo.collection("proposals").insertOne(
//       {
//         // customers collection of users database
//         txHash: req.body.txHash,
//         blockNum: req.body.txHash,
//         proposalId: req.body.proposalId,
//       },
//       function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         db.close();
//       }
//     );
//   });
// });

// proposals.get("/:txHash", (req, res) => {
//   MongoClient.connect(url, function (err, db) {
//     if (err) throw err;
//     var dbo = db.db("transactions");
//     dbo.collection("proposals").findOne(
//       {
//         txHash: req.params.txHash,
//       },
//       function (err, result) {
//         if (err) throw err;
//         res.json(result);
//         db.close();
//       }
//     );
//   });
// });
