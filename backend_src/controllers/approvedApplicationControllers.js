const ApprovedApplications = require("../models/approvedApplicationsModel");

const generatePassNumber = () => {
  return Math.floor(100000000 + Math.random() * 900000000); // Random 9-digit number
};

const ApprovedApplicationsController = {
  // Handle approval of a verified application
  approveApplication: async (req, res) => {
    const application = req.body;

    if (!application.id || !application.name || !application.roll_number) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      // Generate a unique pass number for the approved application
      application.pass_number = generatePassNumber();

      // Save the approved application to the database
      await ApprovedApplications.save(application);

      res
        .status(201)
        .json({
          message: "Application approved successfully!",
          pass_number: application.pass_number,
        });
    } catch (error) {
      console.error("Error approving application:", error);
      res.status(500).json({ error: "Failed to approve application" });
    }
  },

  // Get all approved applications
  getApprovedApplications: (req, res) => {
    ApprovedApplications.getAllApprovedApplications((err, results) => {
      if (err) {
        console.error("Error fetching approved applications:", err);
        return res.status(500).json({ message: "Failed to fetch approved applications", error: err });
      }
      res.status(200).json(results);
    });
  },
};

module.exports = ApprovedApplicationsController;
