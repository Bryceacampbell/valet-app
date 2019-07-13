 const router = require("express").Router();
 const adminController = require("../../controllers/adminController");
 


 router.route("/customers")
   .get(adminController.findAll);

   router.route("/newUser")
   .post(adminController.addNewUser);

//   router.route("/customers/:id")
//   .get(adminController.findOneUser);

//   router.route("/customers/add")
//   .post(adminController.createUser);

//   router.route("/requests")
//   .get(adminController.findAllRequests);

//   router.route("/requests/:id")
//   .get(adminController.findOneRequest)

//   router.route("/calendar")
//   .get(adminController.calendar);



module.exports = router;

