require("dotenv").config({
  path: process.env.NODE_ENV === "production" ? "production.env" : "dev.env"
});
const express = require("express");
const app = express();

const mainConfig = require("./config/mainConfig");
const routeConfig = require("./config/routeConfig");

mainConfig(app);
routeConfig(app);

module.exports = app;
