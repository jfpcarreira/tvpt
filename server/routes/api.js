// Dependencies
var router  = require('express').Router(),
    c       = require('../../tools/constants');


// Models
var Client  = require('../models/client'),
    User    = require('../models/user'),
    Address = require('../models/address');


// Routes
Client.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
Client.register(router, '/clients');

User.methods([c.HTTP_GET, c.HTTP_POST, c.HTTP_PUT, c.HTTP_DELETE]);
User.register(router, '/users');


// Return router
module.exports = router;
