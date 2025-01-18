const express = require('express');
const router = express.Router();
const { createApplication, getVerifiedApplications, cancelApplication } = require('../controllers/verifiedApplicationController');

// Route to create a new application
router.post('/verify', createApplication);

// Route to fetch all verified applications
router.get('/verified_applications', getVerifiedApplications);

// Route to cancel an application by ID
router.delete('/cancel/:id', cancelApplication);

module.exports = router;
