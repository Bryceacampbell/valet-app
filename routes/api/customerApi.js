const router = require("express").Router();
const customerController = require("../../controllers/customerController");


// router.route("/dashboard/schedule")
//   .post(customerController.createSchedule);

router.route("/dashboard/requests/:id")
.get(customerController.findOneRequest);

// router.route("/dashboard/requests")
// .get(customerController.findOneRequest);

// router.route("/dashboard/bills")
//   .get(customerController.findBills);

// router.route("/pickup")
//     .post(customerController.pickupRequest);

// router.route("/schedule")
//     .get(customerController.findAllAssets);

module.exports = router;

