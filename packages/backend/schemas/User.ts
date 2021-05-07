import { Schema, Types } from "mongoose";
import * as mongoose from "mongoose";

const User = new Schema({
  id: Types.ObjectId,
  handle: String,
  passwordHash: { type: String, select: false },
  fullName: String,
});

mongoose.model("User", User);
