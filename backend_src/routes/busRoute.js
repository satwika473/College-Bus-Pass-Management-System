const express = require("express");
const router = express.Router();
const db = require("../config/addbusdb"); // Adjust the path based on where your db.js file is located

router.get("/", (req, res) => {
  const { route_id } = req.query;
  const query = "SELECT * FROM buses WHERE route_id = ?";
  db.query(query, [route_id], (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database error" });
    } else {
      res.json(results);
    }
  });
});

module.exports = router;
