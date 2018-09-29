var path = require("path");

var friendsList = require("../data/friends");



module.exports = function(app) {

  app.get("/api/friends", function(req, res) {
    res.json(friendsList);
  });

//  Add new friend
  app.post("/api/friends", function(req, res) {

    var userData = req.body;
    console.log("userData = " + JSON.stringify(userData));

    var userAnswers = userData.scores;
    console.log("userAnswers " + userAnswers);

  // ------------------------   need to add match code   -----------------------

    // Adds the new user
    friends.push(userData);

    // Sends the response, NEEDS TO WRITE STILL ------------------------
    // res.JSON({status: })
  })
};