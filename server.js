
var express = require("express");
var path = require("path");

var app = express();
// Create link to Angular build directory
var distDir = __dirname + "/dist/";
app.use(express.static(distDir));

// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});


// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({ "error": message });
}

/*  "/api/contacts"
 *    GET: finds all contacts
 *    POST: creates a new contact
 */

app.get("/api/contacts", function (req, res) {
  res.status(200).json({"message": "success.."})
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/dist/deploy-sample/index.html"));
});