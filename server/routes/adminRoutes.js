// Dependencies
var router  = require('express').Router(),
    path    = require('path');

// Router for URL: <root>/admin

// Routes
// Home page for administration
router.get('/', function (req, res) {
    res.redirect('/#!/admin/list');
});

// Return router
module.exports = router;
