"use strict";

const express = require('express')
const exphbs  = require('express-handlebars');

const Playlist = require('./calendar/Playlist')
const Wallpaper = require('./calendar/Wallpaper')
const Utils = require("./calendar/Utils")

let app = express();
let hbs = exphbs.create({
  defaultLayout: 'main',
  partialsDir: __dirname + '/views/partials/'
});

app.use(express.static('public'));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
 
app.get('/', function (req, res, next) {
  res.render("index");
});

app.get('/playlist', function(req, res, next) {
  let pl = Utils.shuffle(new Playlist("./public").files("playlist"));
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(pl, null, 3));
});

app.get('/test', function(req, res, next) {
  let wr = new Wallpaper.WallpaperRegistry('./public/images');
  let wss = new Wallpaper.WallpaperSelectionStrategy()
  res.send(wss.select(wr.files('jukebox')))
});
 
app.listen(8080);