// Dependencies
var mongoose    = require('mongoose'),
    bcrypt      = require("bcryptjs");

// Local varables
var emailRegex  = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var enumRoles   = [ "STANDARD", "ADMIN" ];

// schema specification
var UserSchema = new mongoose.Schema({
    name        : {  type : String, required : true, trim : true },
    username    : {  type : String, required : true, trim : true, index: { unique : true } },
    password    : {  type : String, required : true, trim : true },
    email       : {  type : String, required : true, trim : true, lowercase : true, match : emailRegex },
    roles       : [{ type : String, enum : enumRoles}]
},
// Options
{
    timestamps: true
});

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

// Exports the schema to be reused on other schemas
module.exports = UserSchema;
