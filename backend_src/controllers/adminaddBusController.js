const Route = require('../models/adminaddBus');

const addRouteAndDetails = (req, res) => {
  const { routeName, stages, buses } = req.body;

  // Insert route
  Route.addRoute(routeName, (err, result) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to add route', details: err });
    }
    const routeId = result.insertId;

    // Insert stages
    const stagePromises = stages.map((stage) =>
      new Promise((resolve, reject) => {
        Route.addStage(routeId, stage.name, stage.fee, (err) => {
          if (err) reject(err);
          else resolve();
        });
      })
    );

    // Insert buses
    const busPromises = buses.map((busNumber) =>
      new Promise((resolve, reject) => {
        Route.addBus(routeId, busNumber, (err) => {
          if (err) reject(err);
          else resolve();
        });
      })
    );

    Promise.all([...stagePromises, ...busPromises])
      .then(() => res.status(200).json({ message: 'Route, stages, and buses added successfully' }))
      .catch((err) => res.status(500).json({ error: 'Failed to add stages or buses', details: err }));
  });
};

module.exports = { addRouteAndDetails };
