const express = require("express");
const { json } = require("body-parser");
const authRoutes = require("../backend/auth/routes");
const mongoose = require("mongoose");
const path = require("path");
const requireAll = require("require-all");

const app = express();

// connect to the DB
mongoose.connect("mongodb://localhost/twitterbean", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

// register all schemas
const libs = requireAll(path.join(__dirname, "schemas"));
console.log(libs);

// enable app to use JSON bodies in POST requests.
app.use(json());

app.use("/auth", authRoutes);

const server = app.listen(3000, () => {
  console.log("Now listening on port:", server.address().port);
});

module.exports = app;
