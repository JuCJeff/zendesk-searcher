const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

let users = require("./models/users.json");
let tickets = require("./models/tickets.json");
let organizations = require("./models/organizations.json");

let modes = ["users", "organizations", "tickets"];

let getAttributes = require("./libs/getAttributes.js");

let usersAttr = getAttributes(users);
let organizationsAttr = getAttributes(organizations);
let ticketsAttr = getAttributes(tickets);

let generateResObjArr = require("./libs/helper.js");

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = generateResObjArr(users, term, value);

  res.json(resObjArr);
});

app.get("/tickets", (req, res) => {
  res.json(tickets);
});

app.post("/tickets", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = generateResObjArr(tickets, term, value);

  res.json(resObjArr);
});

app.get("/organizations", (req, res) => {
  res.json(organizations);
});

app.post("/organizations", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = generateResObjArr(organizations, term, value);

  res.json(resObjArr);
});

app.get("/mode", (req, res) => {
  res.json(modes);
});

app.post("/mode", (req, res) => {
  let mode = req.body["mode"];

  switch (mode) {
    case "users":
      res.send(usersAttr);
      break;

    case "tickets":
      res.send(ticketsAttr);
      break;

    case "organizations":
      res.send(organizationsAttr);
      break;

    default:
      res.send([]);
  }
});

app.get("/", (req, res) => {
  res.send("You are connected to the server.");
});

app.listen(process.env.PORT || 8081);
