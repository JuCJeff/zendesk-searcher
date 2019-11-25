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

let helper = require("./libs/helper.js");

let usersAttr = helper.getAttributes(users);
let organizationsAttr = helper.getAttributes(organizations);
let ticketsAttr = helper.getAttributes(tickets);

app.get("/users", (req, res) => {
  res.json(users);
});

app.post("/users", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = helper.generateResObjArr(users, term, value);

  res.json(resObjArr);
});

app.get("/tickets", (req, res) => {
  res.json(tickets);
});

app.post("/tickets", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = helper.generateResObjArr(tickets, term, value);

  res.json(resObjArr);
});

app.get("/organizations", (req, res) => {
  res.json(organizations);
});

app.post("/organizations", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = helper.generateResObjArr(organizations, term, value);

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
