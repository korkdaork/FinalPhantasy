const router = require("express").Router();
const loginController = require("../../controllers/loginController");

// Matches with "/api/books"
router.route("/") //find out where it will be connecting to front end js
    .post(loginController.login);

// Matches with "/api/books/:id"
module.exports = router;