const mongoose = require("mongoose");

// connection with database(mongodb)
mongoose
  .connect("mongodb://localhost:27017/express")
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));
