// Dependencies
var router  = require('express').Router(),
    fs      = require("fs"),
    path    = require('path'),
    utils   = require('../../tools/utils'),
    c       = require('../../tools/constants');


// Router for URL: <root>/api

// Models
var Client  = require('../models/clientModel'),
    User    = require('../models/userModel'),
    Service = require('../models/serviceModel');


// Routes

// Router for URL: <root>/api/clients
Client.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
Client.register(router, '/clients');

// Router for URL: <root>/api/services
Service.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
Service.register(router, '/services');

// Router for URL: <root>/api/users
User.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
User.register(router, '/users');

// Router for URL: <root>/api/users/login
router.get('/users/login', function (req, res) {
/*
    var searchUser = {username: req.body.username};
    User.findOne(searchUser, function(err, user){
        if (err || !user)  return res.status(401).send({ message: "User does not exist!"});
        user.comparePassword(req.body.password, function(err, isMatch){
            if (err || !isMatch) return res.status(401).send({ message: "Wrong user/password!"});
            if (isMatch) return res.status(200).send(utils.getNewToken(user, res));
        });
    });
*/
    res.status(200).send("Login");
});

// Router for URL: <root>/api/users/register
router.get('/users/register', function (req, res) {
/*
    // create user
    var newUser = new User({
        nome: "João Carreira",
        username: "jfpcarreira",
        password: "mastersecure",
        email: "jfpcarreira@gmail.com",
        roles: ["ADMIN"]
    });

    // persist object
    newUser.save(function(err){
        if (err) return res.status(501).jsonp(err);
        return res.status(200).send(utils.getNewToken(newUser, res));
    });
*/
    res.status(200).send("Register");
});

//TODO: REMOVE
// Only for tests propose
router.post('/users/getToken', function(req, res){
/*
    var token = req.body.token;
    console.log('teste token: ' + token);
    return res.status(200).send(utils.getDecodedToken(token, res));
*/
    res.status(200).send("Get Token");
});

// Router for URL: <root>/api/translate
// To get i18n json files
router.get('/translate', function (req, res) {
    var filename = 'messages_' + req.query.lang + '.json';
    var file = path.join(__dirname, '../..', '/tools/i18n', filename);
    var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
});


// Return router
module.exports = router;
