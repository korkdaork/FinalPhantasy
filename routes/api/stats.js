const router = require("express").Router();
const FFController = require("../../controllers/FFController");

// Matches with "/api/books"
// router.route("/") //find out where it will be connecting to front end js
//     .get(FFController.findAllStats)
//     .post(FFController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(FFController.findStatsByUserId)
    .put(FFController.update)
    .delete(FFController.remove);

module.exports = router;