var express = require("express");
var router = express.Router();
require("dotenv").config();
const axios = require("axios");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/spotify", function (req, res, next) {
  res.send("Spotify");
});

router.get("/spotifyrequest", async function (req, res, next) {
  let config = {
    headers: { Authorization: `Bearer ${process.env.ACCESS_TOKEN}` },
  };

  const playlist_songs = await axios.get(
    "https://api.spotify.com/v1/playlists/25b8hPQhuJ09M4BHBxstX8/tracks?limit=100",
    config
  );

  let songsArray = [];

  playlist_songs.data.items.forEach((item) =>
    songsArray.push(item.track.name + " " + item.track.artists[0].name)
  );

  res.send(songsArray);
});

module.exports = router;
