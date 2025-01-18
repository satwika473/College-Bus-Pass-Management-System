const db = require('../models/db2');

// Function to insert pass details into the database
const insertPass = async (passDetails) => {
  const query = `
    INSERT INTO approved_applications 
    (pass_number, name, email, roll_number, institution, department, address, stage, bus, seat, creation_date) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const values = [
    passDetails.pass_number,
    passDetails.name,
    passDetails.email,
    passDetails.roll_number,
    passDetails.institution,
    passDetails.department,
    passDetails.address,
    passDetails.stage,
    passDetails.bus,
    passDetails.seat,
    passDetails.creation_date,
  ];
  return db.execute(query, values);
};

module.exports = { insertPass };
