const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { handle, password } = req.body;

  if (!handle || !password) {
    throw new Error("Must pass in username and password.");
  }

  const User = mongoose.model("User");
  const user = await User.findOne({ handle }).exec();

  if (!user) {
    throw new Error("Login failed.");
  }

  res.json(user);
});

module.exports = router;
