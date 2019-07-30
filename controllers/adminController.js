const db = require("../models");
const axios = require("axios");

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

    const body = req.body;


    let customerObj = {

      dateCreated: "now",

      information: {
        firstName: body.firstName,
        lastName: body.lastName,
        userName: body.userName,
        phoneNumber: body.phoneNumber,
        email: body.email,
        address: body.address,

      }
    }

    db.Customer
      .create(customerObj)
      .then(data => {


        let customerID = data._id;

        return customerID
      })
      .then(customerID => {

        const client_id = "b3MTC80Frslwa1jungIpq65noxzGJ22B";
        const connection = "Username-Password-Authentication";
        const user_metadata = {
          "role": "client",
          "acctNum": customerID
        };

        axios
          .post('https://dev-23nqtwhs.auth0.com/dbconnections/signup',
            {
              client_id: client_id,
              email: req.body.email,
              password: req.body.pass,
              connection: connection,
              given_name: req.body.firstName,
              family_name: req.body.lastName,
              username: req.body.username,
              address: req.body.address,
              phoneNumber: req.body.phoneNumber,
              user_metadata: user_metadata

            })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(err => res.status(422).json(err))

    res.redirect('/admin/customers');
  },
  findAllRequests: function (req, res) {
    console.log("findAllRequests in adminController.js was called");

    db.Asset
      .find(req.query)
      // .find({pickupDetails: { request: { pickupCurrentlyRequested: true } } })
      .find({ "pickupDetails.request.pickupCurrentlyRequested": true })
      .populate("customerId")
      .then(dbModel => {
        // console.log(dbModel);
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err));
  },
  findOneRequest: function (req, res) {

    db.Asset
      .findById({ _id: req.params.id })
      .populate("customerId")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  updateRequest: function (req, res) {

    db.Asset
      .findByIdAndUpdate(
        req.body._id,
        req.body,
        { new: true },
        (err, asset) => {
          if (err) return res.status(500).send(err);
          return res.send(asset);
        }
      )
  },
  remove: function (req, res) {
    db.Customer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  auth0Creation: function (customerID) {
    const client_id = "b3MTC80Frslwa1jungIpq65noxzGJ22B";
    const connection = "Username-Password-Authentication";
    const user_metadata = {
      "role": "writer",
      "clientID": clientID
    };

    axios
      .post('https://dev-23nqtwhs.auth0.com/dbconnections/signup',
        {
          client_id: client_id,
          email: req.body.email,
          password: req.body.pass,
          connection: connection,
          given_name: req.body.firstName,
          family_name: req.body.lastName,
          username: req.body.username,
          address: req.body.address,
          phoneNumber: req.body.phoneNumber,
          user_metadata: user_metadata

        })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
};