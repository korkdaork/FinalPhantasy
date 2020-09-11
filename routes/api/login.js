const router = require("express").Router();
const FFController = require("../../controllers/FFController");

// Matches with "/api/items"
router.get("/login", function (req, res) {
    res.render("login");
});

// Matches with "/api/items/:id"
router
    .route("/:id")
    .get(FFController.findById)
    .put(FFController.update)
    .delete(FFController.remove);

module.exports = router;