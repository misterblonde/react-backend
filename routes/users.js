var express = require("express");
var router = express.Router();

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
let entries = 0;
router.use(cors());

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

router.post("/", function (req, res) {
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

  //   jsonReader("./users.json", (err, newEntry) => {
  //     if (err) {
  //       console.log("Error reading file:", err);
  //       return;
  //     }
  //     // increase customer order count by 1
  //     entries += 1;
  //     fs.writeFile("./users.json", JSON.stringify(newEntry), (err) => {
  //       if (err) console.log("Error writing file:", err);
  //     });
  //   });
});

/* GET users listing. */
router.get("/", function (req, res, next) {
  // alternative write proceudre:
  //res.send('respond with a resource');
  //   var fs = require("fs");
  //   fs.readFile("./users.json", function (err, data) {
  //     var json = JSON.parse(data);
  //     json.push(newEntry);
  //     fs.writeFile("./users.json", JSON.stringify(json));
  //   });
  // reading from the JSON database
  //   let entry;
  //   const fs = require("fs");
  //   fs.readFile("./users.json", "utf8", (err, req) => {
  //     if (err) {
  //       console.log("Error reading file from disk:", err);
  //       return;
  //     }
  //     try {
  //       entry = JSON.parse(req);
  //       //   console.log("Customer address is:", customer.address); // => "Customer address is: Infinity Loop Drive"
  //     } catch (err) {
  //       console.log("Error parsing JSON string:", err);
  //     }
  //   });
  //   res.json(entry);
  // initially
  res.json(myDB);
});

module.exports = router;
