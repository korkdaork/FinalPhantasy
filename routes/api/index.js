const router = require("express").Router();
const itemsRoutes = require("./items");
const statsRoutes = require("./stats");
const userRoutes = require("./user");

// Book routes
router.use("/items", itemsRoutes);
router.use("/stats", statsRoutes);
router.use("/user", userRoutes);

module.exports = router;
