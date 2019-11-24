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

let usersAttr = [
  "_id",
  "url",
  "external_id",
  "name",
  "alias",
  "created_at",
  "active",
  "verified",
  "shared",
  "locale",
  "timezone",
  "last_login_at",
  "email",
  "phone",
  "signature",
  "organization_id",
  "tags",
  "suspended",
  "role"
];
let organizationsAttr = [
  "_id",
  "url",
  "external_id",
  "name",
  "domain_names",
  "created_at",
  "details",
  "shared_tickets",
  "tags"
];
let ticketsAttr = [
  "_id",
  "url",
  "external_id",
  "created_at",
  "type",
  "subject",
  "description",
  "priority",
  "status",
  "submitter_id",
  "assignee_id",
  "organization_id",
  "tags",
  "has_incidents",
  "due_at",
  "via"
];

let generateResObjArr = require("./libs/helper.js/index.js");

app.get("/users", res => {
  res.json(users);
});

app.post("/users", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = generateResObjArr(users, term, value);

  res.json(resObjArr);
});

app.get("/tickets", res => {
  res.json(tickets);
});

app.post("/tickets", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = generateResObjArr(tickets, term, value);

  res.json(resObjArr);
});

app.get("/organizations", res => {
  res.json(organizations);
});

app.post("/organizations", (req, res) => {
  let term = req.body["term"];
  let value = req.body["value"];
  let resObjArr = generateResObjArr(organizations, term, value);

  res.json(resObjArr);
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

app.get("/", res => {
  res.send("You are connected to the server.");
});

app.listen(process.env.PORT || 8081);
