const passModel = require("../models/passModel");

const getPassDetails = async (req, res) => {
  const { passNumber } = req.params;
  try {
    const pass = await passModel.getPassByNumber(passNumber);

    if (pass.length === 0) {
      return res.status(404).json({ message: "Pass not found" });
    }

    res.json(pass[0]);
  } catch (err) {
    console.error("Error fetching pass details:", err);
    res.status(500).json({ message: "Error fetching pass details" });
  }
};

module.exports = {
  getPassDetails,
};
