var express = require('express');
var router = express.Router();
// var User = require('../models/users');


router.post('/register', function (req, res, next) {
    // addToDB(req, res);
    res.json("registered")
});

async function addToDB(req, res) {
    var user = new User({
        email: req.body.email,
        userName: req.body.userName,
        firstName: req.body.firstName,
        lastName:req.body.lastName,
        password: req.body.password
    });
    
    try {
        doc = await user.save();
        return res.status(201).json(doc);
    }
    catch (err) {
        return res.status(501).json(err);
    }
}

router.get('/displayList', function(req, res) {
    // User.find({}).exec(function (err, user) {
    //     if (err) {
    //     console.log("Error:", err);
    //     } else { 
    //         res.json(user);
    //     }
    // });
    var user = [
        {
            "userName": "kjhaggar",
            "firstName": "karuna",
            "lastName": "jhaggar",
            "email" : "kjhaggar@bestpeers.com",
            "password": "qwerty"
        },
        {
            "userName": "ankita",
            "firstName": "ankita",
            "lastName": "singh",
            "email" : "ankita@gmail.com",
            "password": "qwerty"
        }
      ]
    res.send(user);
});

module.exports = router;
