const db = require("../models");
const mongoose = require("mongoose");

module.exports = {
  findAllAssets: function (req, res) {
    console.log("findAllAssets has been called in assetController.js'");
    db.Asset.find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findClientAssets: function (req, res) {
    console.log("findClientAssets has been called in assetController.js");
    db.Asset.find({ belongsToAcctNum: req.params.id })
      .then(dbModel => {
        //   console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  makeRequest: function (req, res) {
    console.log("makeRequest has been called via assetController.js");
    console.log(req.body);
    db.Asset.findByIdAndUpdate(
      { _id: req.body.currentAsset },
      {
        "pickupDetails.request.pickupCurrentlyRequested":
          req.body.pickupCurrentlyRequested,
        // "pickupRequestOriginDate": Date.now,
        "pickupDetails.request.pickupRequestedDate":
          req.body.pickupRequestedDate,
        // {new: true}
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  createAsset: function (req, res) {

    const body = req.body;

    console.log(req.params.id);

    let customerID = req.params.id;

    console.log(body);

    let assetObj = {

      dateAdded: req.body.date,

      storageInfo: {
        currentlyStored: req.body.approved,
        location: req.body.location
      },

      description: {
        year: req.body.year,
        make: req.body.make,
        model: req.body.model,
        hullID: req.body.hullID,
        lineTwo: req.body.notes

      },

      customerId: mongoose.Types.ObjectId(customerID)

    }

    db.Asset
      .create(assetObj)
      .then(function (response) {
        console.log(response);
      })
      .catch(err => res.status(422).json(err))

    res.redirect('/admin/customers');
  }
};
