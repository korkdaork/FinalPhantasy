const passport = require("passport");
const Strategy = require("passport-local").Strategy;

// load up the user model
var User = require('../models/user');

passport.use(new Strategy((email, password, done) => {
  User.findOne({ email: email }, (err, user) => {

    // If any error
    if (err) { return done(err) }

    if (!user) {
      return done(null, false, {
        message: 'No user found.'
      })
    }

    user.login(password).then(() => {
      return done(null, user)
    }).catch((err) => {
      return done(err, false, {
        message: 'Password not matched.'
      })
    })
  })
}))

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

// Exporting our configured passport 
//jwt is needed
module.exports = passport;
