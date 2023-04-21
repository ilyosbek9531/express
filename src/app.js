const express = require("express");

const app = express();

const PORT = 4000;

app.get("/", (req, res) => {
  res.send([
    {
      id: 1,
      name: "ilyosbek",
    },
    {
      id: 2,
      name: "alisher",
    },
  ]);
});

app.listen(PORT, () => {
  console.log("Running express server on port 4000");
});
