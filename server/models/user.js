// Dependencies
var restful = require('node-restful');
var bcrypt = require("bcryptjs");
var mongoose = restful.mongoose;

mongoose.Promise = global.Promise;

// Local varables
var emailRegex  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var enumRoles   = [ "STANDARD", "ADMIN" ];

// Define the schema
var UserSchema = new mongoose.Schema({
    name        : { type : String, trim : true, required : true },
    username    : { type : String, trim : true, required : true, index: { unique : true } },
    password    : { type : String, trim : true, required : true },
    email       : { type : String, trim : true, lowercase : true, required : true, match : emailRegex },
    roles       : [{ type : String, enum : enumRoles}],
    dateCreated : { type : Date, default : Date.now, required: true }
},
// Options
{});

// Before any attempt to save, we first encrypt the password
UserSchema.pre('save', function (next) {
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) return next(err);
            bcrypt.hash(this.password, salt, function (err, hash) {
                if (err) return next(err);
                this.password = hash;
                next();
            });
        });
    }
    else return next();
});

UserSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

// Exports the model
module.exports = restful.model('User', UserSchema);
