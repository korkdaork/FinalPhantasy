const db = require("../models");
const passport = require("../config/passport");
// Defining methods for the booksController
module.exports = {
    login: function (req, res) {

        db.User
            .findOne({ email: req.body.email })
            .then((results) => {
                res.json({ success: true, firstName: results.firstName, lastName: results.lastName, id: results._id });
            })
            .catch(err => res.status(422).json(err));
    }
};