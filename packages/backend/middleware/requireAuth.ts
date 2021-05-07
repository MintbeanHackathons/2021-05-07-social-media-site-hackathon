import createError from "http-errors";
import { RequestHandler } from "express";

const mongoose = require("mongoose");

const requireAuth: RequestHandler = async (req, res, next) => {
  const user =
    // @ts-ignore
    req.session.userId &&
    // @ts-ignore
    (await mongoose.model("User").findOne({ _id: req.session.userId }).exec());

  if (!user) {
    return next(
      createError(401, "You need to be logged in to perform this action.")
    );
  }

  next();
};

export default requireAuth;
