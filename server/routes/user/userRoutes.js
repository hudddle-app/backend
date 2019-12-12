const express = require("express");
const router = express.Router();
const userController = require("./userController");

router.get("/", userController.statusCheck);

module.exports = router;
