import * as express from "express";
const mongoose = require("mongoose");
import * as bcrypt from "bcrypt";
const router = express.Router();

router.post("/login", async (req, res) => {
  const { handle, password } = req.body;

  if (!handle || !password) {
    throw new Error("Must pass in username and password.");
  }

  const user = await mongoose
    .model("User")
    .findOne({ handle })
    .select(["+passwordHash"])
    .exec();

  const passwordMatched =
    user && (await bcrypt.compare(password, user.passwordHash));

  if (!passwordMatched || !user) {
    throw new Error("Login failed.");
  }

  res.json({ _id: user._id, handle: user.handle, fullName: user.fullName });
});

router.post("/register", async (req, res) => {
  const { handle, password } = req.body;

  if (!handle || !password) {
    throw new Error("Must pass in username and password.");
  }

  const User = mongoose.model("User");
  const user = await User.findOne({ handle }).exec();

  if (user) {
    throw new Error("Register failed. A user with that handle already exists.");
  }

  const passwordHash = await bcrypt.hash(password, 10);

  User.create({
    handle,
    passwordHash,
  });

  res.json(user);
});

module.exports = router;
