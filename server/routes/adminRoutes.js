// Dependencies
var router  = require('express').Router(),
    path    = require('path');

// Router for URL: <root>/admin

// Routes
// Login validation for any /admin/* URL
router.get('*', function (req, res, next) {
    // Validates if the user is loged in
    // If it is the request follows
    // TODO: Fazer método para validar o login
    if (true) next();
    // If not redirect to login page
    else res.redirect('/login');
});

// Home page for administration
router.get('/', function (req, res) {
    res.sendFile('clientsList.html', { root: path.join(__dirname, '../..', '/client/views/private') });
});


// Return router
module.exports = router;
