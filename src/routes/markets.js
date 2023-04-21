const { Router } = require("express");

const router = Router();

const markets = [
  {
    location: "toshkent",
    name: "havas",
  },
  {
    location: "fargona",
    name: "macro",
  },
];

router.get("/", (req, res) => {
  res.send(markets);
});

router.get("/:name", (req, res) => {
  const { name } = req.params;
  const market = markets.find((item) => (item.name = name));
  res.send(market);
});

router.post("/", (req, res) => {
  markets.push(req.body);
  res.send(201);
});

module.exports = router;
