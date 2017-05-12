// Dependencies
var restful  = require('node-restful'),
    mongoose = restful.mongoose;

mongoose.Promise = global.Promise;

// Define the schema
var ServiceSchema = new mongoose.Schema({
    code        : { type : String,  required : true,  trim : true, maxlength: 3, index: { unique : true } },
    name        : { type : String,  required : true,  trim : true },
    isSelected  : { type : Boolean, required : true },
    isDisabled  : { type : Boolean, required : true },
    price       : { type : Number,  required : true }
},
// Options
{
    timestamps: true
});

/**
TVS
RPI
SDC
PWR
HDM
RJC
*/

// Exports the model
module.exports = restful.model('Service', ServiceSchema);
