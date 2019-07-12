const router = require("express").Router();
//const bookRoutes = require("./books");
const adminRoutes = require("./adminApi");
const customerRoutes = require("./customerApi");

// Book routes
//router.use("/books", bookRoutes);
router.use("/admin", adminRoutes);
router.use("/dashboard", customerRoutes);

module.exports = router;
