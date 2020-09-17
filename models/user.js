const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var bcrypt = require('bcrypt-nodejs');
// const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    // The email cannot be null, and must be a proper email before creation
    email: {
        type: String
    },
    // The password cannot be null
    password: {
        type: String
    },

    firstName: {
        type: String
    },

    lastName: {
        type: String
    }
    // tokens: [{
    //     token: {
    //         type: String,
    //         required: true
    //     }
    // }]
});

// userSchema.pre('save', async function (next) {
//     // Hash the password before saving the user model
//     const user = this
//     if (user.isModified('password')) {
//         user.password = await bcrypt.hash(user.password, 3)
//     }
//     next()
// })

// // userSchema.methods.generateAuthToken = async function () {
// //     // Generate an auth token for the user
// //     const user = this
// //     const token = jwt.sign({ _id: user._id }, process.env.JWT_KEY)
// //     user.tokens = user.tokens.concat({ token })
// //     await user.save()
// //     return token
// // }

// userSchema.statics.findByCredentials = async (email, password) => {
//     // Search for a user by email and password.
//     const user = await User.findOne({ email })
//     if (!user) {
//         throw new Error({ error: 'Invalid login credentials' })
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password)
//     if (!isPasswordMatch) {
//         throw new Error({ error: 'Invalid login credentials' })
//     }
//     return user
// // }

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
