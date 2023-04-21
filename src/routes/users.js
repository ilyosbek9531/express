const { Router } = require("express");

const router = Router();

const users = [];

// basic get request
router.get(
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

router.get("/:id", (req, res) => {
  const userId = req.params.id;
  const user = users.find((item) => item.id == userId);
  res.send(user);
});

// basic post request
router.post("/", (req, res) => {
  users.push(req.body);
  res.send(201);
});

module.exports = router;
