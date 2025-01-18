const db = require('./db1');

const Application = {
  create: (data, callback) => {
    const query = `
      INSERT INTO verified_applications 
      (name, roll_number, institution, department, email, phone, address, route, stage, bus, seat) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [
      data.name,
      data.roll_number,
      data.institution,
      data.department,
      data.email,
      data.phone,
      data.address,
      data.route,
      data.stage,
      data.bus,
      data.seat,
    ];
    db.query(query, values, callback);
  },

  getAllVerifiedApplications: (callback) => {
    const query = `SELECT * FROM verified_applications`;
    db.query(query, callback);
  },

  delete: (id, callback) => {
    const query = `DELETE FROM verified_applications WHERE id = ?`;
    db.query(query, [id], callback);
  },
};

module.exports = Application;
