const Application = require('../models/verifiedapplicationModel');

// Fetch all verified applications
exports.getVerifiedApplications = (req, res) => {
  Application.getAllVerifiedApplications((err, results) => {
    if (err) {
      console.error('Error fetching verified applications:', err);
      return res.status(500).json({ message: 'Failed to fetch verified applications', error: err });
    }
    res.status(200).json(results);
  });
};

// Create a new application
exports.createApplication = (req, res) => {
  const applicationData = req.body;

  console.log('Incoming application data:', applicationData); // Debugging log

  Application.create(applicationData, (err, result) => {
    if (err) {
      console.error('Error creating application:', err); // Debugging log
      return res.status(500).json({ message: 'Failed to create application', error: err });
    }
    res.status(201).json({ message: 'Application created successfully', data: result });
  });
};

// Cancel (delete) an application by ID
exports.cancelApplication = (req, res) => {
  const applicationId = req.params.id;

  Application.delete(applicationId, (err, result) => {
    if (err) {
      console.error('Error cancelling application:', err);
      return res.status(500).json({ message: 'Failed to cancel application', error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Application not found' });
    }
    res.status(200).json({ message: 'Application cancelled successfully' });
  });
};
