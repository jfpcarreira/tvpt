// Dependencies
var express     = require('express'),
    bodyParser  = require('body-parser'),
    request     = require('request'),
    utils       = require('./tools/utils'),
    env         = require('dotenv').config(),
    fs          = require("fs"),
    mongoose    = require('mongoose');

// Connect to mongo DB Atlas
mongoose.connect(utils.getMongoUri(process.env), function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


// Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Root page will return empty page
app.get('/', function (req, res) {
    res.status(200);
});


// Filter all the requests to the /user url
app.get('/users/*', function (req, res, next) {
    // Validates if the source who originated the request is supported 
    // If its valid pass the request to the next handler
    if (utils.isValidSource(req)) next();
    // If not show an error
    else res.status(403).send('Content not supported for your device!');
});


// Athenticate user/pass and return a valid URL
app.get('/users/:user-:pass', function (req, res) {
    // 1 - Fazer método para verificar que user e pass estão OK
    // 2 - Fazer método que faz query no MongoDB para obter o url original

    if (req.params.user === 'u' && req.params.pass === 'p') {
        // res.redirect("http://tvdasogra.com:8880/get.php?username=jfpcarreira&password=320579&type=m3u&output=ts");
        res.status(200).send('Faz o redirect para a sogra');
    }
    else {
        res.status(401).send('Authentication failed!');
    }
});


// Entry page for the administration panel
app.get('/admin', function (req, res) {
    res.sendFile(__dirname + '/client/views/private/index.html');
});


// To get i18n json files
app.get('/translate', function (req, res) {
    var file = './tools/i18n/messages_' + req.query.lang + '.json';
    var obj = JSON.parse(fs.readFileSync(file, 'utf8'));

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(obj));
});


app.use('/api',     require('./server/routes/api'));
app.use('/mod',     express.static(__dirname + '/client/modules'));
app.use('/cfg',     express.static(__dirname + '/client/config'));
app.use('/ctrl',    express.static(__dirname + '/client/controllers'));
app.use('/srv',     express.static(__dirname + '/client/services'));
app.use('/dir',     express.static(__dirname + '/client/directives'));
app.use('/css',     express.static(__dirname + '/client/css'));



// Star server
var server = app.listen(3000, function () {
    console.log('Server1 listening on port %s', server.address().port);
});
