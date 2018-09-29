var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Creates a server.
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.static(__dirname + '/'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server routes
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

// Listener that starts our server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
