const express = require("express");
// used for to make readable env file
require("dotenv").config();

const app = express();

// taking port from env file
const PORT = process.env.PORT;

// used for convert to json file between client side and server side
app.use(express.json());
// It parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded());

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

const users = [];

// basic get request
app.get(
  "/",
  // midleware
  (req, res, next) => {
    console.log("Before handling request");
    next();
  },
  // midleware
  (req, res, next) => {
    res.send(users);
    next();
  },
  // midleware
  (req, res, next) => {
    console.log("Finished Executing GET request");
    next();
  },
  // midleware
  () => {
    console.log("The end");
  }
);

// basic post request
app.post("/", (req, res) => {
  users.push(req.body);
  res.send(201);
});

// listening port
app.listen(PORT, () => {
  console.log("Running express server on port 4000");
});
