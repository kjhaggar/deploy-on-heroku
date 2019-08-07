var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var routes = require("./routes/index")
const pg = require('pg');

var app = express();

var distDir = __dirname + "/dist/deploy-sample/";
app.use(express.static(distDir));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', routes);

app.get('/', function (req, res) {
    res.sendFile(__dirname + "/dist/deploy-sample/index.html")
});

app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('Whoops! Something went wrong');
  });

// Create link to Angular build directory

const connectionString = process.env.DATABASE_URL || 'postgres://developer:admin@localhost:5432/developer';

// const client = new pg.Client(connectionString);
// client.connect(); 
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

// Connect to the database before starting the application server.
pg.connect(connectionString, function (err, client) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    // Save database object from the callback for reuse.
    // db = client.db();
    console.log("Database connection ready");

    // Initialize the app.
    var server = app.listen(process.env.PORT || 8080, function () {
        var port = server.address().port;
        console.log("App now running on port", port);
    });
});

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
    console.log("ERROR: " + reason);
    res.status(code || 500).json({ "error": message });
}

module.exports = app;