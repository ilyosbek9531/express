const { Router } = require("express");

const router = Router();

const users = [];

// basic get request
router.get(
  "/",
  // midleware
  (req, res, next) => {
    console.log("Before handling request");
    res.cookie("visited", true, {
      maxAge: 60000,
    });
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
  console.log("cookies", req.cookies);
  const userId = req.params.id;
  const user = users.find((item) => item.id == userId);
  res.send(user);
});

// basic post request
router.post("/", (req, res) => {
  users.push(req.body);
  res.send(201);
});

router.get("/shopping/cart", (req, res) => {
  const { cart } = req.session;
  if (!cart) {
    res.send("You have no cart session");
  } else {
    res.send(cart);
  }
});

router.post("/shopping/cart/item", (req, res) => {
  const { item, quantity } = req.body;
  const cartItem = { item, quantity };
  const { cart } = req.session;
  if (cart) {
    req.session.cart.items.push(cartItem);
  } else {
    req.session.cart = {
      items: [cartItem],
    };
  }
  res.send(201);
});

module.exports = router;
