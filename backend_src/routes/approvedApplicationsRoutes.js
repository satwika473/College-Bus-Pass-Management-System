const express = require("express");
const ApprovedApplicationsController = require("../controllers/approvedApplicationControllers");

const router = express.Router();

// Approve an application
router.post("/approve", ApprovedApplicationsController.approveApplication);

// Get all approved applications
router.get("/", ApprovedApplicationsController.getApprovedApplications);

module.exports = router;
