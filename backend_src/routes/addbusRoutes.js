const express = require("express");
const router = express.Router();
const routeController = require("../controllers/addbusController");

// Route to get all routes
router.get("/", routeController.getAllRoutes);


module.exports = router;
