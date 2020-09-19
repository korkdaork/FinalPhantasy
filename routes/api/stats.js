const router = require("express").Router();
const FFController = require("../../controllers/FFController");

// Matches with "/api/books"
// router.route("/") //find out where it will be connecting to front end js
//     .get(FFController.findAllStats)
//     .post(FFController.create);

// Matches with "/api/stats/
router
    .route("/")
    .get(FFController.findStatsByUserId)
    
    .delete(FFController.removeStats);
router
    .route("/:userId")
    .get(FFController.findStatsByUserId)
    .put(FFController.updateStats)


module.exports = router;