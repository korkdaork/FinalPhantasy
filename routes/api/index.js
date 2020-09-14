const router = require("express").Router();
const itemsRoutes = require("./items");
const statsRoutes = require("./stats");
const userRoutes = require("./user");
const loginRoutes = require("./login");

// Book routes
router.use("/items", itemsRoutes);
router.use("/stats", statsRoutes);
router.use("/user", userRoutes);
router.use("/login", loginRoutes);

module.exports = router;
