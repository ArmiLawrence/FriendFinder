// Dependencies
var express = require("express");
var path = require("path");
var html = require("./routing/htmlRoutes");
var data = require("./data/friends")

// Create express app instance.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Friends (DATA)
// =============================================================
var friends = [
  {
    name :"Ahmed",
    photo :"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
    scores:[
      5,
      1,
      4,
      4,
      5,
      1,
      2,
      5,
      4,
      1
    ]
  },
];

// Routes
//home
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "public/home.html"));
});

//survey
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "public/survey.html"));
  });

// Displays all characters
app.get("/api/friends", function(req, res) {
  console.log(friends);
  return res.json(friends);
  
});  

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newFriend = req.body;

  console.log(newFriend);

  friends.push(newFriend);

  res.json(newFriend);
});


    // Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
  });