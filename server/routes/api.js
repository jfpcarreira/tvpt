// Dependencies
var router  = require('express').Router(),
    fs      = require("fs"),
    path    = require('path'),
    c       = require('../../tools/constants');


// Router for URL: <root>/api

// Models
var Client  = require('../models/client'),
    User    = require('../models/user'),
    Service = require('../models/service');


// Routes

// Router for URL: <root>/api/clients
Client.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
Client.register(router, '/clients');

// Router for URL: <root>/api/users
User.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
User.register(router, '/users');

// Router for URL: <root>/api/services
Service.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
Service.register(router, '/services');

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
