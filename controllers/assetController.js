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
    db.Asset.find({ customerId: req.params.id })
      .then(dbModel => {
        //   console.log(dbModel);
        res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  makeRequest: function (req, res) {

    db.Asset.findByIdAndUpdate(
      { _id: req.body.currentAsset },
      {
        "pickupDetails.request.pickupCurrentlyRequested":
          req.body.pickupCurrentlyRequested,
        // "pickupRequestOriginDate": Date.now,
        "pickupDetails.request.pickupRequestedDate":
          req.body.pickupRequestedDate,
        // {new: true}
        "pickupDetails.request.pickupRequestStatus":
          req.body.pickupRequestStatus,
        "pickupDetails.request.pickupRequestedTime":
          req.body.pickupRequestedTime,
        "pickupDetails.request.pickupRequestedNote":
          req.body.pickupRequestedNote,
        "pickupDetails.confirmation.pickupConfirmDate":
          req.body.pickupConfirmDate,
        "pickupDetails.confirmation.pickupConfirmedBy":
          req.body.pickupConfirmedBy,
        "pickupDetails.completion.pickupComplete":
          req.body.pickupComplete,
        "pickupDetails.completion.pickupCompleteDate":
          req.body.pickupCompleteDate,
        "pickupDetails.completion.pickupCompleteNote":
          req.body.pickupCompleteNote,
        "pickupDetails.request.selectedServices":
          req.body.selectedServices
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
