const express = require("express");
const router = express.Router();
const db = require("../config/addbusdb"); // Adjust the path to your DB configuration

// Endpoint to fetch stages by route name
router.get("/", (req, res) => {
  const routeName = req.query.route_id;


  const query = "SELECT stage_id, stage_name, fee FROM stages WHERE route_id = ?";
  db.query(query, [routeName], (err, results) => {
    if (err) {
      console.error("Error fetching stages:", err);
      return res.status(500).json({ error: "Failed to retrieve stages" });
    }
    res.json(results);
  });
});

module.exports = router;
