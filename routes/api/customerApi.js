const router = require("express").Router();
const customerController = require("../../controllers/customerController");


router.route("/dashboard/schedule")
  .post(customerController.createSchedule);

router.route("/dashboard/requests:id")
  .get(customerController.findAllRequests);
//:id
// router.route("/requests")
//  .get(customerController.findAllRequests);

router.route("/dashboard/bills")
  .get(customerController.findBills);

module.exports = router;

