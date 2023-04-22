const express = require("express");
const cookieParser = require("cookie-parser");
const session = require("express-session");
// used for to make readable env file
require("dotenv").config();

const app = express();

const usersRoute = require("./routes/users");
const marketsRoute = require("./routes/markets");
const authRoute = require("./routes/auth");

// taking port from env file
const PORT = process.env.PORT;

// used for convert to json file between client side and server side
app.use(express.json());
// It parses incoming requests with URL-encoded payloads and is based on a body parser.
app.use(express.urlencoded());
// parse cookie
app.use(cookieParser());
//
app.use(
  session({
    secret: "KJSDUIUWYRWEMNDSFJHKSDHFKWUERHJDSFSDHFJSK",
    resave: false,
    saveUninitialized: false,
  })
);

app.use((req, res, next) => {
  console.log(`${req.method}:${req.url}`);
  next();
});

app.use("/auth", authRoute);

app.use((req, res, next) => {
  if (req.session.user) next();
  else res.send(401);
});

app.use("/users", usersRoute);
app.use("/markets", marketsRoute);

// listening port
app.listen(PORT, () => {
  console.log("Running express server on port 4000");
});
