// Dependencies
var restful     = require('node-restful'),
    UserSchema  = require('../schemas/UserSchema');

// Exports the model
module.exports = restful.model('User', UserSchema);
