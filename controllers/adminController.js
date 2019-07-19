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
    console.log("got here");

    let customerObj = {

      firstName: req.body.firstName,

      lastName: req.body.lastName,

      userName: req.body.username,

      phoneNumber: req.body.phoneNumber,

      email: req.body.email,

      address: req.body.address

    }

    console.log(customerObj);

    db.Customer
      .create(customerObj)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

    console.log("adding new user to database: ");
    console.log("-------------------------------");

    console.log(req.body);
    console.log(req.body.pass);


    const client_id = "b3MTC80Frslwa1jungIpq65noxzGJ22B";
    const connection = "Username-Password-Authentication";
    const user_metadata = { "role": "writer" };


    // axios
    // .post('https://dev-23nqtwhs.auth0.com/dbconnections/signup',
    // {
    //   client_id : client_id,
    //   email : req.body.email,
    //   password : req.body.pass,
    //   connection : connection,
    //   given_name : req.body.firstName,
    //   family_name : req.body.lastName,
    //   username : req.body.username,
    //   address : req.body.address,
    //   phoneNumber : req.body.phoneNumber,
    //   user_metadata : user_metadata

    //  })
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    res.status(200)
    // .send(req.body);
  },
  findAllRequests: function (req, res) {
    console.log("findAllRequests in adminController.js was called");

    db.Asset
      .find(req.query)
      // .find({pickupDetails: { request: { pickupCurrentlyRequested: true } } })
      .find({"pickupDetails.request.pickupCurrentlyRequested": true})      
      .populate("customerId")
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