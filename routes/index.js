var express = require('express');
var router = express.Router();
const pg = require('pg');
const path = require('path');
const connectionString = process.env.DATABASE_URL || 'postgres://developer:admin@localhost:5432/developer';
// var User = require('../models/users');

// router.get('/', (req, res, next) => {
//     res.sendFile(path.join(__dirname,'..', 'src', 'index.html'));
// });

router.post('/register', (req, res, next) => {debugger
    const results = [];
    console.log(req.body)
    const data = {name: req.body.userName, email: req.body.email};
    pg.connect(connectionString, (err, client, done) => {
      if(err) {
        done();
        console.log(err);
        return res.status(500).json({success: false, data: err});
      }
      client.query('INSERT INTO users(name, email) values($1, $2)',
      [data.name, data.email]);
      const query = client.query('SELECT * FROM users ORDER BY id ASC');
      query.on('row', (row) => {
        results.push(row);
      });
      query.on('end', () => {
        done();
        return res.json(results);
      });
    });
  });

router.get('/displayList', function(req, res) {
  const results = [];
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err);
      return res.status(500).json({success: false, data: err});
    }
    const query = client.query('SELECT * FROM users ORDER BY id ASC;');
    query.on('row', (row) => {
      results.push(row);
    });
    query.on('end', () => {
      done();
      return res.json(results);
    });
  });
});

module.exports = router;
