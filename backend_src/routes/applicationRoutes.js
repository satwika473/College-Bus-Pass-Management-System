const express = require('express');
const router = express.Router();
const { getApplications, createApplication } = require('../controllers/applicationController');

router.get('/applications', getApplications);

// Route to create a new application
router.post('/applications', createApplication);


module.exports = router;
