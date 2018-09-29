var friendsArray = [
    {
        "name":"Ahmed",
        "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
        "scores":[
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
    }
]



function runFriendQuery() {
    $.ajax({ url: "/api/friends", method: "GET" })
    .then(function(friendsList) {
        console.log(friendsArray);
        console.log("--------------------------------");

        // Loop through to show all friends
        for (var i = 0; i <friendsList.length; i++) {
            var friendsData = $("#friendsData");

            var listItem = $("<li class='list-group-item mt-4'>");

            listItem.append(
            $("<h2>").text("" + (i + 1)),
            $("<hr>"),
            $("<h2>").text("ID: " + tableData[i].customerID),
            $("<h2>").text("Name: " + tableData[i].customerName),
            $("<h2>").text("Email: " + tableData[i].customerEmail),
            $("<h2>").text("Phone: " + tableData[i].phoneNumber)
          );

          friendsData.append(listItem);
            
        }
    })
}

module.exports = friendsArray;