const RouteModel = require("../models/addbusModel");

// Fetch all routes
const getAllRoutes = (req, res) => {
  RouteModel.getRoutes((err, routes) => {
    if (err) {
      console.error("Error fetching routes:", err);
      return res.status(500).json({ error: "Failed to retrieve routes" });
    }
    res.json(routes);
  });
};

// Fetch stages for a specific route
const getStagesByRouteId = (req, res) => {
  const { route_id } = req.params;

  RouteModel.getStages(route_id, (err, stages) => {
    if (err) {
      console.error("Error fetching stages for route:", err);
      return res.status(500).json({ error: "Failed to retrieve stages" });
    }
    if (stages.length === 0) {
      return res.status(404).json({ message: "No stages found for this route" });
    }
    res.json(stages);
  });
};

module.exports = {
  getAllRoutes,
  getStagesByRouteId,
};
