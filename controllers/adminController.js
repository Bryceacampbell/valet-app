const db = require("../models");

// Defining methods for the adminController
module.exports = {
  findAllUsers: function (req, res) {
    console.log("findAllUsers was called in adminController.js");
    db.Customer
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function (req, res) {
    db.Customer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function (req, res) {
    db.Customer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findAllRequests: function (req, res) {
    console.log("findAllRequests in adminController.js was called");

    db.Asset
      .find(req.query)
      // .where({ pickupDetails: { request: { pickupCurrentlyRequested: true } } })
      .populate({
        path: "customerId",
        select: 'firstName lastName',
      })
      .then(dbModel => {
        console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findOneRequest: function (req, res) {
    db.Asset
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function (req, res) {
    db.Customer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};