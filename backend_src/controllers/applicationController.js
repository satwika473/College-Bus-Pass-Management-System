const Application = require('../models/applicationModel');
const mysql = require('mysql2');
const db = mysql.createConnection({
    host: 'localhost', // Replace with your host
    user: 'root',      // Replace with your MySQL username
    password: '123456',      // Replace with your MySQL password
    database: 'deptco_auth', // Replace with your database name
  });
exports.createApplication = (req, res) => {
  const applicationData = req.body;

  Application.create(applicationData, (err, result) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to create application', error: err });
    }
    res.status(201).json({ message: 'Application created successfully', data: result });
  });
};
exports.getApplications = (req, res) => {
    const query = 'SELECT * FROM bus_pass_applications';
    db.query(query, (err, results) => {
      if (err) {
        console.error('Error fetching data:', err);
        return res.status(500).json({ error: 'Failed to fetch data' });
      }
      res.json(results);
    });
  };