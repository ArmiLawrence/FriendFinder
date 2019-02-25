// Dependencies
// ===========================================================
var express = require("express");
var friends = require("../data/friends")

var app = express();

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

module.exports = function (app) {

// Displays all friends
app.get("/api/friends", function(req, res) {
  console.log(friends);
  return res.json(friends);
  
  });  

// Create New Characters - takes in JSON input
app.post("/api/friends", function(req, res) {

    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newFriend = req.body;
    var matchName = "";
    var matchPhoto = "";
  
  // For-each loop to go through the data in friends.js to find a match
    friends.forEach(function(friend) {
        // Variables for comparing matches
        var friendScoresArray = [];
        var newFriendScoresArray = [];
        var friendDifference = 0;
        var newFriendDifference = 0;
  
        // Function to assist in the addition reduce() below
        function getSum(total, num) {
          return total + num;
        }
  
        //loop through existing friend data scores into Array
        for (var i = 0; i < friend.length; i++) {
          console.log(friend.name[i]);
          friendScoresArray.push(Math.abs(parseInt(friend.scores[i])));
  
        }
        console.log(friendScoresArray);
  
        //loop through new friend data scores into Array
        for (var i = 0; i < newFriend.length; i++) {
          console.log(newFriend.name[i]);
          newFriendScoresArray.push(Math.abs(parseInt(newFriend.scores[i])));
  
        }
        console.log(newFriendScoresArray)
        
        // This reduces the matched scoresArray into a single value in a variable
        friendDifference  = friendScoresArray.reduce(getSum);
  
        // This reduces the matched scoresArray into a single value in a variable
        newFriendDifference = newFriendScoresArray.reduce(getSum);
  
        // If the above value is smaller than the previous difference...
        if (newFriendDifference <= friendDifference ) {
            
            // And set these variables to the appropriate friend match
            matchName = friend.name;
            matchPhoto = friend.photo;
        }
        });
        // Once the cycle is complete, the match with the least difference will remain,
    // and that data will be sent as a json object back to the client
    res.json({
    name: matchName,
    photo: matchPhoto
    });
  

    //adding new friend to console and data
    console.log(newFriend);
    friends.push(newFriend);
    res.json(newFriend);
 
  });

  
};






