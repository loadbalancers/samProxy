require('newrelic');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
var compression = require('compression');
var request = require('request');

var server = express();
server.use(compression());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static(path.join(__dirname, './'), { maxAge: '30 days' }));
server.use(cors());

// Albums & Player
server.get('/artists/:artistId/albums', (req, res) => {
  req.pipe(request('http://13.57.38.215:3000' + req.url)).pipe(res);
});

// Related Artists
server.get('*/related-artists', (req, res) => {
  res.redirect(
    `http://34.239.128.16:3005/ra-module/${Math.floor(
      Math.random() * 1000
    )}/related-artists`
  );
});

// Popular Songs
server.get('/artist/:id', (req, res) => {
  res.redirect('http://13.56.254.143' + req.url);
});

// Header
server.get('/artists/:artistID', (req, res) => {
  res.redirect('http://54.193.126.17:3004' + req.url);
});

// Locations
server.get('/locations', (req, res) => {
  res.redirect('http://54.193.126.17:3004' + req.url);
});

server.listen(3000, console.log('Listening on:', 3000));
