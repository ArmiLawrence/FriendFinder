// Dependencies
var express = require("express");


// Create express app instance.
var app = express();


// Routes
//home
app.get("/public/home", function(req, res) {
    res.sendFile(path.join(__dirname, "public/home.html"));
  });

//survey
app.get("/public/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
  });


