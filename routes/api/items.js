const router = require("express").Router();
const FFController = require("../../controllers/FFController");

// Matches with "/api/items"
router.route("/") //find out where it will be connecting to front end js
    .get(FFController.findAllItem)
    .post(FFController.create);

// Matches with "/api/items/:id"
router
    .route("/:id")
    .get(FFController.findItemsByUserId)
    .put(FFController.update)
    .delete(FFController.remove);

module.exports = router;