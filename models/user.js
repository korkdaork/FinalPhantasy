const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    // The email cannot be null, and must be a proper email before creation
    email: {
        type: String

    },
    // The password cannot be null
    password: {
        type: String
    }
});

userSchema.pre('save', function (next) {
    var user = this;
    if (this.isModified('password') || this.isNew) {
        bcrypt.genSalt(10, function (err, salt) {
            if (err) {
                return next(err);
            }
            bcrypt.hash(user.password, salt, null, function (err, hash) {
                if (err) {
                    return next(err);
                }
                user.password = hash;
                next();
            });
        });
    } else {
        return next();
    }
});

userSchema.methods.comparePassword = function (passw, cb) {
    bcrypt.compare(passw, this.password, function (err, isMatch) {
        if (err) {
            return cb(err);
        }
        cb(null, isMatch);
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
