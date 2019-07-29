const router = require("express").Router();
const assetController = require("../../controllers/assetController");

router.route("/findassets/:id")
    .get(assetController.findClientAssets);

router.route("/pickup")
    .put(assetController.makeRequest);

module.exports = router;