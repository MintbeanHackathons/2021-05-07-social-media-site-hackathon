import * as express from "express";
const mongoose = require("mongoose");
import * as bcrypt from "bcrypt";
import createError from "http-errors";
import { create } from "ts-node";
const router = express.Router();

router.post("/login", async (req, res, next) => {
  try {
    // @ts-ignore
    if (req.session.userId) {
      return next(createError(400, "You are already logged in."));
    }

    const { handle, password } = req.body;

    if (!handle || !password) {
      return next(
        createError(400, "You must provide both handle and password.")
      );
    }

    const user = await mongoose
      .model("User")
      .findOne({ handle })
      .select(["+passwordHash"])
      .exec();

    const passwordMatched =
      user && (await bcrypt.compare(password, user.passwordHash));

    if (!passwordMatched || !user) {
      return next(createError(400, "Failed to login."));
    }

    // Success! Set the user ID and return the user.
    console.log("SETTING IN LOGIN", user._id);
    // @ts-ignore
    req.session.userId = user._id;
    // @ts-ignore
    console.log("SET IN LOGIN", req.session.userId);

    return res.json({
      _id: user._id,
      handle: user.handle,
    });
  } catch (e) {
    return next(createError(500, e));
  }
});

router.post("/register", async (req, res, next) => {
  try {
    // @ts-ignore
    if (req.session.userId) {
      return next(createError(400, "You are already logged in."));
    }

    const { handle, password } = req.body;

    if (!handle || !password) {
      return next(createError(400, "Must provide both handle and password."));
    }

    const User = mongoose.model("User");
    const user = await User.findOne({ handle }).exec();

    if (user) {
      return next(
        createError(
          400,
          "Registration failed. A user with that handle already exists."
        )
      );
    }

    const passwordHash = await bcrypt.hash(password, 10);

    console.log("Creating");
    const newUser = await User.create({
      handle,
      passwordHash,
    });
    console.log("Done");

    // Success! Set the user ID and return the user.
    // @ts-ignore
    req.session.userId = newUser._id;
    return res.json(newUser);
  } catch (e) {
    return next(createError(500, e));
  }
});

router.get("/check", async (req, res, next) => {
  // @ts-ignore
  const { userId } = req.session;
  const User = mongoose.model("User");
  const user = userId && (await User.findOne({ _id: userId }).exec());

  console.log(user, userId);

  if (!userId || !user) {
    return res.json({
      loggedIn: false,
    });
  }

  return res.json(user);
});

router.post("/logout", async (req, res, next) => {
  // @ts-ignore
  req.session.userId = undefined;
  return res.json({ success: true });
});

module.exports = router;
