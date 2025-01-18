const db = require("./db2");

const ApprovedApplications = {
  // Save approved application
  save: async (application) => {
    const query = `
      INSERT INTO approved_applications 
      (id, name, roll_number, institution, department, email, phone, address, route, stage, bus, seat, pass_number, creation_date)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW())
    `;
    const values = [
      application.id,
      application.name,
      application.roll_number,
      application.institution,
      application.department,
      application.email,
      application.phone,
      application.address,
      application.route,
      application.stage,
      application.bus,
      application.seat,
      application.pass_number,
    ];
    return db.execute(query, values);
  },

  // Fetch all approved applications
  getAllApprovedApplications: (callback) => {
    const query = "SELECT * FROM approved_applications ORDER BY creation_date DESC";
    db.query(query, (err, results) => {
      if (err) {
        console.error("Error fetching approved applications:", err);
        return callback(err, null);
      }
      callback(null, results);
    });
  },
};

module.exports = ApprovedApplications;
