// Dependencies
var express = require("express");
var path = require("path");

// Create express app instance.
var app = express();

module.exports = function(app) {
// Routes
//home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});

//survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });
};

 