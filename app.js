// Dependencies
var express     = require('express'),
    bodyParser  = require('body-parser'),
    request     = require('request'),
    utils       = require('./tools/utils'),
    mongoose    = require('mongoose');


// Use native promises
mongoose.Promise = global.Promise;


// Connect to mongo DB Atlas
mongoose.connect(utils.getMongoUri(), function(err) {
    if (err) throw err;
    console.log('Successfully connected to MongoDB');
});


// Express
var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Login page for the administration
// app.get('/login', function (req, res) {
//     res.sendFile(__dirname + '/client/views/public/login.html');
// });
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/public/index.html');
});


// Routes
app.use('/client',  require('./server/routes/clientRoutes'));
app.use('/admin',   require('./server/routes/adminRoutes'));
app.use('/api',     require('./server/routes/apiRoutes'));


// Static references
app.use('/mod',     express.static(__dirname + '/client/modules'));
app.use('/cfg',     express.static(__dirname + '/client/config'));
app.use('/const',   express.static(__dirname + '/client/constant'));
app.use('/ctrl',    express.static(__dirname + '/client/controllers'));
app.use('/fact',    express.static(__dirname + '/client/factories'));
app.use('/dir',     express.static(__dirname + '/client/directives'));
app.use('/css',     express.static(__dirname + '/client/css'));
app.use('/pub',     express.static(__dirname + '/client/views/public'));
app.use('/prv',     express.static(__dirname + '/client/views/private'));
app.use('/tmpl',    express.static(__dirname + '/client/views/templates'));


// Any other unmapped path will return 404 - Page not found
app.get('*', function (req, res) {
    res.status(404).send("Page not found");
});


// Star server
var server = app.listen(3000, function () {
    console.log('Server1 listening on port %s', server.address().port);
});
