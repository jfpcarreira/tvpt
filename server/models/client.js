// Dependencies
var restful 				= require('node-restful'),
		AddressSchema		= require('./address'),
		random 					= require("randomstring");

// Local varables
var emailRegex  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneRegex  = /^[\+1]{0,2}?\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
var enumServices   = [ "TV da Sogra", "Raspberry PI", "Cartão SD", "Cabo HDMI", "Cabo RJ-45", "Cabo Alimentação" ];

// Define the schema
var ClientSchema = new restful.mongoose.Schema({
    name        			: { type  : String, trim : true, required  : true },
    username    			: { type  : String, trim : true, required  : true, index: { unique : true } },
    password    			: { type  : String, trim : true, required  : true },
		userSogra					: { type  : String, trim : true, required  : true },
		passSogra					: { type  : String, trim : true, required  : true },
    email       			: { type  : String, trim : true, lowercase : true, required : true, match : emailRegex },
    address     			: [ AddressSchema ],
    phone       			: { type  : String, trim : true, required  : true, match : phoneRegex },
    services    			: [{ type : String, enum : enumServices}],
    registrationDate	: { type  : Date, default : Date.now, required: true },
    expirationDate		: { type  : Date, default : generateExpirationDate(), required: true },
		isActive          : { type : Boolean, default : true }
},
// Options
{
    timestamps: true
});

function generateExpirationDate() {
	return new Date().setFullYear(new Date().getFullYear() + 1);
}

// Befora saving we define a random user and password
ClientSchema.pre('save', function (next) {
	this.username = random.generate(10);
	this.password = random.generate(10);
	next();
});

// Exports the model
module.exports = restful.model('Client', ClientSchema);
