// Dependencies
var express     = require('express'),
    bodyParser  = require('body-parser'),
    request     = require('request'),
    utils       = require('./tools/utils'),
    favicon     = require('serve-favicon'),
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

// Favicon definition
app.use(favicon(__dirname + '/client/img/favicon.png'));

// Forwards for index page
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/public/index.html');
});

// Routes
app.use('/api',     require('./server/routes/apiRoutes'));
app.use('/admin',   require('./server/routes/adminRoutes'));
app.use('/client',  require('./server/routes/clientRoutes'));
app.use('/user',    require('./server/routes/userRoutes'));

// Static references
app.use('/mod',     express.static(__dirname + '/client/modules'));
app.use('/cfg',     express.static(__dirname + '/client/config'));
app.use('/const',   express.static(__dirname + '/client/constant'));
app.use('/ctrl',    express.static(__dirname + '/client/controllers'));
app.use('/fact',    express.static(__dirname + '/client/factories'));
app.use('/dir',     express.static(__dirname + '/client/directives'));
//app.use('/int',     express.static(__dirname + '/client/interceptores'));
app.use('/css',     express.static(__dirname + '/client/css'));
app.use('/img',     express.static(__dirname + '/client/img'));
app.use('/pub',     express.static(__dirname + '/client/views/public'));
app.use('/prv',     express.static(__dirname + '/client/views/private'));
app.use('/tmpl',    express.static(__dirname + '/client/views/templates'));
app.use('/modal',   express.static(__dirname + '/client/views/templates/modals'));

// Any other unmapped path will return 404 - Page not found
app.get('*', function (req, res) {
    res.status(404).send("Page not found");
});

// Star server
var server = app.listen(3000, function () {
    console.log('Server1 listening on port %s', server.address().port);
});
