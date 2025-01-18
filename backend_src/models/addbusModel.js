const db = require("../config/addbusdb");

const getRoutes = (callback) => {
  const query = "SELECT route_id, route_name FROM routes";
  db.query(query, (err, results) => {
    if (err) {
      return callback(err, null);
    }
    callback(null, results);
  });
};

module.exports = { getRoutes };
