const router = require("express").Router();
const loginController = require("../../controllers/loginController");
const passport = require("../../config/passport")
// Matches with "/api/books"
router.route("/") //find out where it will be connecting to front end js
    .post(passport.authenticate('local', {
    }), loginController.login);

// Matches with "/api/books/:id"
module.exports = router;