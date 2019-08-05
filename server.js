const express = require('express');
const path = require('path');
var indexRouter = require('./routes/index');
var logger = require('morgan');

var app = express();

// Serve only the static files form the dist directory
app.engine('pug', require('pug').__express)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function(req,res) {
    
  res.sendFile(path.join(__dirname+'/dist/deploy-sample/index.html'));
  });
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'dist/deploy-sample')));
app.use('/apis', express.static(path.join(__dirname, 'dist/deploy-sample')));
app.use('/api', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
  res.jsonp({success : true})
});

module.exports = app;