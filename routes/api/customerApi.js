const router = require("express").Router();
const customerController = require("../../controllers/customerController");
const assetController = require("../../controllers/assetController");

// router.route("/dashboard/schedule")
//   .post(customerController.createSchedule);

// router.route("/dashboard/requests:id")
//   .get(customerController.findAllRequests);
//:id
// router.route("/requests")
//  .get(customerController.findAllRequests);

// router.route("/dashboard/bills")
//   .get(customerController.findBills);

router.route("/schedule/assets")
    .get(assetController.findAllAssets);

module.exports = router;

