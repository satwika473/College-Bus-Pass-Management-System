const express = require('express');
const { addRouteAndDetails } = require('../controllers/adminaddBusController');

const router = express.Router();

router.post('/add-route', addRouteAndDetails);

module.exports = router;
