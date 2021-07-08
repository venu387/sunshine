var express = require("express");
var app = express();
var weatherRouter = require("./routing/router");

app.use("/", weatherRouter);

app.listen(3000, () => {
  console.log("Sunshine Api running on port 3000");
});
