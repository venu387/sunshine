var express = require("express");

var weatherRouter = express.Router();

weatherRouter.get("/getweather/:city", (req, res, next) => {
  // call weather api to get the current weather using the city name

  res.send("req.params");
});

weatherRouter.get("/getweather/:lon/:lat", () => {
  // call weather api to get the current weather using the longitude and latitude
});

weatherRouter.get("/getweatherbypostal/:postalCode", () => {
  // call weather api to get the current weather using the postalcode
});

module.exports = weatherRouter;
