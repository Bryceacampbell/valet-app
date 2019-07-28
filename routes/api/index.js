const router = require("express").Router();
//const bookRoutes = require("./books");
const adminRoutes = require("./adminApi");
const customerRoutes = require("./customerApi");
const assetRoutes = require("./assetApi");

// Book routes
//router.use("/books", bookRoutes);
router.use("/admin", adminRoutes);
router.use("/dashboard", customerRoutes);
router.use("/assets", assetRoutes)

module.exports = router;
