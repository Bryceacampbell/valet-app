const router = require("express").Router();
const assetController = require("../../controllers/assetController");

router.route("/findassets/:id")
    .get(assetController.findClientAssets);

router.route("/pickup")
    .put(assetController.makeRequest);

router.route("/add/:id")
    .post(assetController.createAsset)

module.exports = router;