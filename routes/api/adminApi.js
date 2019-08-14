const router = require("express").Router();
const adminController = require("../../controllers/adminController");

router.route("/customers")
  .get(adminController.findAllUsers);

// router.route("/admin/customers/:id")
// .get(adminController.findOneUser);

router.route("/customers/add")
  .post(adminController.createUser);

router.route("/customers/:id")
  .post(adminController.updateCustomer);

router.route("/requests")
  .get(adminController.findAllRequests);

router.route("/requests/:id")
  .get(adminController.findOneRequest)

router.route("/upcomingpickups")
  .get(adminController.findUpcomingPickups);

router.route("/assets")
  .get(adminController.findAllAssets);

// router.route("/admin/calendar")
// .get(adminController.calendar);

router.route("/requests")
  .get(adminController.findAllRequests);

router.route("/requests")
  .put(adminController.updateRequest);

//   router.route("/requests/:id")
//   .get(adminController.findOneRequest)

//   router.route("/calendar")
//   .get(adminController.calendar);



module.exports = router;

