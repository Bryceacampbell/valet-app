const db = require("../models");

// Defining methods for the customerController
module.exports = {
  findAll: function(req, res) {
    db.Customer.find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Customer.findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
    db.Customer.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  update: function(req, res) {
    db.Book.findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Book.findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  pickupRequest: function(req, res) {
    console.log("pickupRequest has been called via customerController.js");
    db.Asset.findOneAndUpdate(
      { _id: req.params.id },
      {
        $set: {
          "pickupDetails.request.pickupCurrentlyRequested":
            req.body.pickupCurrentlyRequested,
          pickupRequestOriginDate: Date.now,
          "pickupRequestedDate": req.body.pickupRequestedDate
        }
      }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  findOneRequest: function (req, res) {
    console.log("made it to controller");
    db.Asset
      .findById({ _id: req.params.id })
      .populate("customerId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
