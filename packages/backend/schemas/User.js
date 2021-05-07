const mongoose = require("mongoose");
const { Schema, ObjectId } = mongoose;

const User = new Schema({
  handle: String,
  passwordHash: String,
  fullName: String,
});

console.log("USER REQUIRED");

mongoose.model("User", User);
