const passport = require("passport");
const Strategy = require("passport-local").Strategy;

// load up the user model
var User = require('../models/user');

passport.use(new Strategy({ usernameField: "email" }, (email, password, done) => {
  console.log("passport hit")
  User.findOne({ email: email }, (err, user) => {

    // If any error
    if (err) { return done(err) }

    if (!user) {
      return done(null, false, {
        message: 'No user found.'
      })
    }

    user.comparePassword(password, (err, isMatch) => {
      console.log(err)
      if (err) {
        return done(err, false, {
          message: 'Password not matched.'
        })
      } console.log(isMatch)
      return done(null, user)
    })
  })
}))

// In order to help keep authentication state across HTTP requests,
// Sequelize needs to serialize and deserialize the user
// Just consider this part boilerplate needed to make it all work
passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});

// Exporting our configured passport 
//jwt is needed
module.exports = passport;
