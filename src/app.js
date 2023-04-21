const express = require("express");
// used for to make readable env file
require("dotenv").config();

const app = express();

// taking port from env file
const PORT = process.env.PORT;

// used for convert to json file between client side and server side
app.use(express.json());

// basic get request
app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "ilyosbek",
    },
  ]);
});

// basic post request
app.post("/", (req, res) => {
  console.log("1", req.body);
  res.send(201);
});

// listening port
app.listen(PORT, () => {
  console.log("Running express server on port 4000");
});
