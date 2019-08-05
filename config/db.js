const mongoose = require('mongoose');

mongoose.connect('mongodb:https://demo-deploy-sample.herokuapp.com/', { useNewUrlParser: true });

mongoose.connection.on('connected', function (err) {
  console.log("Connected to DB Successfully");
});

// Error handler
mongoose.connection.on('error', function (err) {
  console.log(err);
});