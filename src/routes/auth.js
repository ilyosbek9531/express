const { Router } = require("express");
const User = require("../database/schemas/User");
const { hashPassword, comparePassword } = require("../utils/helpers");

const router = Router();

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) return res.send(400);
  const userDB = await User.findOne({ email });
  if (!userDB) return res.send(401);
  const isValid = comparePassword(password, userDB.password);
  if (isValid) {
    req.session.user = userDB;
    return res.send(200);
  } else return res.send(401);
});

router.post("/register", async (req, res) => {
  const { password, email } = req.body;
  const userDB = await User.findOne({ email });
  if (userDB) {
    res.status(400).send({ msg: "User already exists!" });
  } else {
    const hashedPassword = hashPassword(password);
    await User.create({ password: hashedPassword, email });
    res.send(201);
  }
});
module.exports = router;
