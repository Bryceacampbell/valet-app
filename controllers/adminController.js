const db = require("../models");
const axios = require("axios");


// Defining methods for the adminController
module.exports = {
  findAll: function(req, res) {
    // db.Customer
    //   .find(req.query)
    //   .sort({ date: -1 })
    //   .then(dbModel => res.json(dbModel))
    //   .catch(err => res.status(422).json(err));
      res.send('Here you Go');
  },
  findById: function(req, res) {
    db.Customer
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  createUser: function(req, res) {
    db.Customer
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));

      
  },
  findAllRequests: function(req, res) {
    db.Asset
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOneRequest: function(req, res) {
    db.Asset
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Customer
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  addNewUser: function(req, res){

    const userObj = req.body;

    console.log("adding new user to database: ");
    console.log("-------------------------------");
    
  
    console.log(req.body.client_id);


    


    axios
    .post('https://dev-23nqtwhs.auth0.com/dbconnections/signup', 
    { 
      client_id : req.body.client_id,
      email : req.body.email,
      password : req.body.password,
      connection : req.body.connection,
      name : req.body.name,
      user_metadata : req.body.user_metadata

     })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
   res.status(200).send(userObj);
  }
};