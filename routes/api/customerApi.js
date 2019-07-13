 const router = require("express").Router();
 const customerController = require("../../controllers/customerController");


// router.route("/schedule")
//   .post(customerController.createSchedule);

//:id
 router.route("/requests")
  .get(customerController.findAllRequests);

//  router.route("/bills")
//   .get(customerController.findBills);

module.exports = router;

