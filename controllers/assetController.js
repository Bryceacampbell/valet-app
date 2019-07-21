const db = require("../models");

module.exports = {
    findAllAssets: function (req, res) {
    console.log("findAllAssets has been called in assetController.js'");
    db.Asset
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
