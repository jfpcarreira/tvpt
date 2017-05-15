// Dependencies
var restful  = require('node-restful'),
    mongoose = restful.mongoose;

mongoose.Promise = global.Promise;

// Define the schema
var ServiceSchema = new mongoose.Schema({
    code         : { type : String,  required : true,  trim : true, maxlength: 3, index: { unique : true } },
    name         : { type : String,  required : true,  trim : true },
    is_selected  : { type : Boolean, required : true },
    is_disabled  : { type : Boolean, required : true },
    price        : {
                     amount: Number,
                     currency: String,
                     symbol: String 
                   }
},
// Options
{
    timestamps: true
});

// Exports the model
module.exports = restful.model('Service', ServiceSchema);
