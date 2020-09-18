const router = require("express").Router();
const FFController = require("../../controllers/FFController");
const passport = require("../../config/passport")

// Matches with "/api/books"
router.route("/") //find out where it will be connecting to front end js
    .get(FFController.findAllUser)
    .post(FFController.createUser);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(FFController.findById)
    .put(FFController.updateUser)
    .delete(FFController.removeUser);

module.exports = router;