const express = require("express");
const { json } = require("body-parser");
const authRoutes = require("../backend/auth/routes");

const app = express();

// enable app to use JSON bodies in POST requests.
app.use(json());

app.use("/auth", authRoutes);

const server = app.listen(3000, () => {
  console.log("Now listening on port:", server.address().port);
});

module.exports = app;
