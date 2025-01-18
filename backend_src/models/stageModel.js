const db = require("./addbusModel");

// Fetch all routes
const getRoutes = async () => {
  const [rows] = await db.query("SELECT * FROM routes");
  return rows;
};

// Fetch stages for a specific route
const getStagesByRouteId = async (routeId) => {
  const [rows] = await db.query("SELECT * FROM stages WHERE route_id = ?", [routeId]);
  return rows;
};

module.exports = {
  getRoutes,
  getStagesByRouteId,
};
