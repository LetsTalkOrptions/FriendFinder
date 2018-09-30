var path = require("path");

var friendsList = require("../data/friends");



module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friendsList);
  });

  //  Add new friend
  app.post("/api/friends", function (req, res) {

    var userData = req.body;
    console.log("userData = " + JSON.stringify(userData));

    var userAnswers = userData.scores;
    console.log("userAnswers " + userAnswers);

    // ------------------------   need to add match code   -----------------------


    // Compute best friend match
    var matchName = '';
    var matchImage = '';
    var difference = 1000; // Make the initial value big for comparison

    // Examine all existing friends in the list
    for (var i = 0; i < friendsList.length; i++) {
      // console.log('friend = ' + JSON.stringify(friends[i]));

      // Compute differenes for each question
      var difference1 = 0;
      for (var j = 0; j < userAnswers.length; j++) {
        difference1 += Math.abs(friendsList[i].scores[j] - userAnswers[j]);
      }
      // console.log('diff = ' + diff);

      // Match friends with lowest difference
      if (difference1 < difference) {

        difference = difference1;
        matchName = friendsList[i].name;
        matchImage = friendsList[i].photo;
      }
    }


    // Add new user
    friendsList.push(userData);

    // Send appropriate response
    res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });

  });

};