var express = require("express");
var router = express.Router();
require("dotenv").config();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/spotify", function (req, res, next) {
  res.send("Spotify");
});

router.post("/spotifyrequest", function (req, res, next) {
  res.send("Request");
});
module.exports = router;
