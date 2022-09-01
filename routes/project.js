var express = require("express");
var project = express.Router();

// new inserts
var cors = require("cors");
// var app = express();
// var router = express.Router();
// let myDB = [
//   //   { id: 1, username: "julia" },
//   //   { id: 2, username: "ariane" },
// ];

// let myDB = require("./data.json");
let myDB = [];
project.use(cors());

// let data = [];
// router.get("/", function (req, res) {
//   console.log("Inside Home Login");
//   //   console.log("Incoming data: ", req.body);
//   res.writeHead(200, {
//     "Content-Type": "application/json",
//   });
//   console.log("Data : ", JSON.stringify(req));
//   res.end(JSON.stringify(req));
// });

/* GET users listing. */
// router.get("/", function (req, res) {
//   //res.send('respond with a resource');
//   res.json(myDB);
// });

project.post("/", function (req, res) {
  //   const newEntry = {
  //     id: req.body.id,
  //     username: req.body.username,
  //   };

  const newEntry = {
    txHash: req.body.txHash,
    proposalId: req.body.proposalId,
    proposalQuestion: req.body.proposalQuestion,
    proposalDescription: req.body.proposalDescription,
    budget: req.body.budget,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  };
  // email: req.body.email,

  console.log(newEntry);
  //   JSON.stringify(newEntry)
  myDB.push(newEntry); // req worked also for julika example JSON.stringify
  console.log("New entry added: ", myDB);
});

/* GET users listing. */
project.get("/", function (req, res, next) {
  //res.send('respond with a resource');
  res.json(myDB);
});

module.exports = project;
