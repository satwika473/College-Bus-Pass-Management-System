import React, { useEffect, useState } from "react";
import "./Mainpage.css";
import Sidenav from "./Sidenav";

const Mainpage = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedApp, setSelectedApp] = useState(null);

  // Fetch verified applications on component mount
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/verified_applications");
        if (!response.ok) {
          throw new Error("Failed to fetch verified applications");
        }
        const data = await response.json();
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
        alert("Failed to fetch applications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  // Handle approve button click (open modal)
  const handleApprove = (app) => {
    setSelectedApp(app);
  };

  // Confirm approval and send data to the backend
  const confirmApproval = async () => {
    if (!selectedApp) return;

    try {
      const response = await fetch("http://localhost:3001/api/approved_applications/approve", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(selectedApp),
      });

      if (!response.ok) {
        throw new Error("Failed to approve the application");
      }

      const result = await response.json();
      alert(result.message || "Application approved successfully!");

      // Remove approved application from the local state
      setApplications((prev) => prev.filter((app) => app.id !== selectedApp.id));

      // Close the modal
      setSelectedApp(null);
    } catch (error) {
      console.error("Error approving application:", error);
      alert("Failed to approve the application. Please try again.");
    }
  };

  // Close modal without action
  const closeModal = () => {
    setSelectedApp(null);
  };

  if (loading) {
    return <div className="loading">Loading applications...</div>;
  }

  return (
    <div className="applications-table-container">
      <Sidenav />
      <h2>Verified Applications</h2>
      {applications.length > 0 ? (
        <table className="applications-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Roll Number</th>
              <th>Institution</th>
              <th>Department</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Route</th>
              <th>Stage</th>
              <th>Bus</th>
              <th>Seat</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.roll_number}</td>
                <td>{app.institution}</td>
                <td>{app.department}</td>
                <td>{app.email}</td>
                <td>{app.phone}</td>
                <td>{app.address}</td>
                <td>{app.route}</td>
                <td>{app.stage}</td>
                <td>{app.bus}</td>
                <td>{app.seat}</td>
                <td>
                  <button
                    className="verify-btn"
                    onClick={() => handleApprove(app)}
                  >
                    Approve
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data">No verified applications found.</div>
      )}

      {selectedApp && (
        <>
          <div className="overlay" onClick={closeModal}></div>
          <div className="modal">
            <div className="modal-header">Pass Details</div>
            <table className="modal-content">
              <tbody>
                <tr>
                  <td><strong>ID:</strong></td>
                  <td>{selectedApp.id}</td>
                </tr>
                <tr>
                  <td><strong>Name:</strong></td>
                  <td>{selectedApp.name}</td>
                </tr>
                <tr>
                  <td><strong>Roll Number:</strong></td>
                  <td>{selectedApp.roll_number}</td>
                </tr>
                <tr>
                  <td><strong>Institution:</strong></td>
                  <td>{selectedApp.institution}</td>
                </tr>
                <tr>
                  <td><strong>Department:</strong></td>
                  <td>{selectedApp.department}</td>
                </tr>
                <tr>
                  <td><strong>Email:</strong></td>
                  <td>{selectedApp.email}</td>  
                </tr>
                <tr>
                  <td><strong>Phone:</strong></td>
                  <td>{selectedApp.phone}</td>
                </tr>
                <tr>
                  <td><strong>Address:</strong></td>
                  <td>{selectedApp.address}</td>
                </tr>
                <tr>
                  <td><strong>Route:</strong></td>
                  <td>{selectedApp.route}</td>
                </tr>
                <tr>
                  <td><strong>Stage:</strong></td>
                  <td>{selectedApp.stage}</td>
                </tr>
                <tr>
                  <td><strong>Bus:</strong></td>
                  <td>{selectedApp.bus}</td>
                </tr>
                <tr>
                  <td><strong>Seat:</strong></td>
                  <td>{selectedApp.seat}</td>
                </tr>
              </tbody>
            </table>
            <div className="modal-actions">
              <button className="btn-confirm" onClick={confirmApproval}>
                Confirm Approval
              </button>
              <button className="btn-cancel" onClick={closeModal}>
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Mainpage;
