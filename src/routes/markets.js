const { Router } = require("express");

const router = Router();

const markets = [
  {
    location: "toshkent",
    name: "havas",
    miles: 0.7,
  },
  {
    location: "fargona",
    name: "macro",
    miles: 1.5,
  },
  {
    location: "namangan",
    name: "havas",
    miles: 2.3,
  },
  {
    location: "buxoro",
    name: "macro",
    miles: 5.1,
  },
  {
    location: "navoiy",
    name: "havas",
    miles: 9.0,
  },
  {
    location: "andijon",
    name: "macro",
    miles: 18.5,
  },
  {
    location: "sirdaryo",
    name: "havas",
    miles: 19.3,
  },
  {
    location: "samarqand",
    name: "macro",
    miles: 4.1,
  },
];

router.get("/", (req, res) => {
  const { miles, sort } = req.query;
  const parsedMiles = parseFloat(miles);
  if (!isNaN(parsedMiles)) {
    const filterByMiles = markets.filter((item) =>
      sort == "ASC"
        ? item.miles > parsedMiles
        : sort == "DSC"
        ? item.miles < parsedMiles
        : item.miles == parsedMiles
    );
    res.send(filterByMiles);
  } else res.send(markets);
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
