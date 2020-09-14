const db = require("../models");
const passport = require("../config/passport");
// Defining methods for the booksController
module.exports = {
    login: function (req, res) {
        db.User
            .findOne({ email: req.body.email })
            .then((results) => {
                let foundUser = false
                if (results) {
                    if (results.password === req.body.password) {
                        foundUser = true
                    }
                }
                res.json({ success: foundUser });
            })
            .catch(err => res.status(422).json(err));
    }
};