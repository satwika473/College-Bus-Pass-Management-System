const express = require("express");
const router = express.Router();
const passController = require("../controllers/passController");

// Define the route for fetching a pass by number
router.get("/:passNumber", passController.getPassDetails);

module.exports = router;
