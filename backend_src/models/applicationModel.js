const db = require('./db1');

const Application = {
  create: (data, callback) => {
    const query = `
      INSERT INTO bus_pass_applications 
      (name, roll_number, institution,department, email, phone, address, route, stage, bus, seat) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?,?)
    `;
    const values = [
      data.name,
      data.rollNumber,
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
};

module.exports = Application;
