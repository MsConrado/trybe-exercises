const express = require("express");
const axios = require("axios");
const router = express.Router();

//1
const emailRegex =
  /^([a-z]){1,}([a-z0-9._-]){1,}([@]){1}([a-z]){2,}([.]){1}([a-z]){2,}([.]?){1}([a-z]?){2,}$/i;

router.get("/user/register", (req, res) => {
  const { username, email, password } = req.body;

  if (username.length < 3)
    return res.status(400).json({ message: "invalid data" });
  if (!emailRegex.test(email))
    return res.status(400).json({ message: "invalid data" });
  if (password.length < 4 || password.length > 8)
    return res.status(400).json({ message: "invalid data" });

  res.status(201).json({ message: "user created" });
});

router.post("/user/login", (req, res) => {
  const { authorization } = req.headers;
  console.log(authorization);
  let token = "";
  const { email, password } = req.body;
  for (let index = 0; index < 2; index += 1) {
    token += Math.random().toString(36).substring(2);
  }
  token.substring(0, 12);

  if (!emailRegex.test(email))
    return res.status(400).json({ message: "email or password is incorrect" });
  if (password.length < 4 || password.length > 8)
    return res.status(400).json({ message: "email or password is incorrect" });

  res.status(201).json({ token: token.substring(0, 12) });
});

//2
router.get("/btc/prince", async (req, res) => {
  const { authorization } = req.headers;

  if (authorization.length !== 12)
    return res.status(401).json({ message: "invalid token" });

  const fetch = await axios(
    "https://api.coindesk.com/v1/bpi/currentprice/BTC.json"
  );

  res.status(200).json(fetch.data);
});

//3
router.get("/posts/:id", (req, res) => {
  const { id } = req.params;
  if (!id) return res.status(404).json({ message: "post not found" });

  res.status(200).json(id);

});

module.exports = router;
