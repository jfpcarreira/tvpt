// Dependencies
var router  = require('express').Router(),
    utils   = require('../../tools/utils'),
    path    = require('path');

// Router for URL: <root>/user

// Routes
// Filter all the requests to the /user url
router.get('/*', function (req, res, next) {
    console.log("ESTOU AQUI 1");
    // Validates if the source who originated the request is supported 
    // If its valid pass the request to the next handler
    if (utils.isValidSource(req)) next();
    // If not show an error
    else res.status(403).send('Content not supported for your device!');
});


// Athenticate user/pass and return a valid URL
router.get('/:user-:pass', function (req, res) {
    console.log("ESTOU AQUI 2");
    // TODO: Fazer método para verificar que user e pass estão OK
    // TODO: Fazer método que faz query no MongoDB para obter o url original

    if (req.params.user === 'u' && req.params.pass === 'p') {
        // res.redirect("http://tvdasogra.com:8880/get.php?username=jfpcarreira&password=320579&type=m3u&output=ts");
        res.status(200).send('Faz o redirect para a sogra');
    }
    else {
        res.status(401).send('Authentication failed!');
    }
});


// Return router
module.exports = router;
