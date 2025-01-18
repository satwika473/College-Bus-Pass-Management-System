const db = require('./db2');

const Route = {
  addRoute: (routeName, callback) => {
    const query = 'INSERT INTO routes (route_name) VALUES (?)';
    db.query(query, [routeName], callback);
  },
  addStage: (routeId, stageName, fee, callback) => {
    const query = 'INSERT INTO stages (route_id, stage_name, fee) VALUES (?, ?, ?)';
    db.query(query, [routeId, stageName, fee], callback);
  },
  addBus: (routeId, busNumber, callback) => {
    const query = 'INSERT INTO buses (route_id, bus_number) VALUES (?, ?)';
    db.query(query, [routeId, busNumber], callback);
  },
};

module.exports = Route;
