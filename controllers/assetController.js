const db = require("../models");

module.exports = {
    findAllAssets: function (req, res) {
    console.log("findAllAssets has been called in assetController.js'");
    db.Asset
        .find(req.query)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    findClientAssets: function (req, res) {
        console.log("findClientAssets has been called in assetController.js");
        db.Asset
        .find({ "belongsToAcctNum": req.params.id })
        .then(dbModel => {
          console.log(dbModel);
          res.json(dbModel);
        })
        .catch(err => res.status(422).json(err));
    },
    makeRequest: function(req, res) {
        console.log("makeRequest has been called via assetController.js");
         db.Asset
          .findByIdAndUpdate({ _id: req.body._id}, {
                "pickupDetails.request.pickupCurrentlyRequested":
                req.body.pickupCurrentlyRequested,
                // "pickupRequestOriginDate": Date.now,
                "pickupDetails.request.pickupRequestedDate": req.body.pickupRequestedDate
            // {new: true}
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
      }
};
