const router = require("express").Router();
const adminController = require("../../controllers/adminController");


router.route("/admin/customers")
  .get(adminController.findAllUser);

  router.route("/admin/customers/:id")
  .get(adminController.findOneUser);

  router.route("/admin/customers/add")
  .post(adminController.createUser);

  router.route("/admin/requests")
  .get(adminController.findAllRequests);

  router.route("/admin/requests/:id")
  .get(adminController.findOneRequest)

  router.route("/admin/calendar")
  .get(adminController.calendar);



module.exports = router;
