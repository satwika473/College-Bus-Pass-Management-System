import React, { useEffect, useState } from "react";
import "./Mainpage.css"; // Add custom styles for the main page if needed
import "./ManagePass.css"; // Add custom styles for ManagePass
import Sidenav from "./Sidenav";

const ManagePass = () => {
  const [approvedApplications, setApprovedApplications] = useState([]);
  const [selectedApplication, setSelectedApplication] = useState(null); // To store the application for modal
  const [loading, setLoading] = useState(true);

  // Fetch approved applications from the backend
  useEffect(() => {
    const fetchApprovedApplications = async () => {
      try {
        const response = await fetch(
          "http://localhost:3001/api/approved_applications/"
        );
        if (!response.ok) {
          throw new Error("Failed to fetch approved applications");
        }
        const data = await response.json();
        setApprovedApplications(data);
      } catch (error) {
        console.error("Error fetching approved applications:", error);
        alert("Failed to fetch approved applications. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchApprovedApplications();
  }, []);

  const handleView = (application) => {
    setSelectedApplication(application); // Set the selected application to display in modal
  };

  const closeModal = () => {
    setSelectedApplication(null); // Clear the selected application and close modal
  };

  const sendEmail = async (application) => {
    const emailData = {
      recipientEmail: application.email,
      subject: "Your Bus Pass Details",
      text: `Hello ${application.name}, your bus pass details are below.`,
      html: `
        <h3>Bus Pass Details</h3>
        <p><strong>Pass Number:</strong> ${application.pass_number}</p>
        <p><strong>Name:</strong> ${application.name}</p>
        <p><strong>Institution:</strong> ${application.institution}</p>
        <p><strong>Department:</strong> ${application.department}</p>
        <p><strong>Stage:</strong> ${application.stage}</p>
        <p><strong>Bus:</strong> ${application.bus}</p>
        <p><strong>Seat:</strong> ${application.seat}</p>
        <p>Valid for the Academic Year: ${
          new Date(application.creation_date).getFullYear()
        }-${new Date(application.creation_date).getFullYear() + 1}</p>
      `,
    };

    try {
      const response = await fetch("http://localhost:3001/api/send_email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(emailData),
      });

      if (!response.ok) {
        throw new Error("Failed to send email");
      }

      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error("Error sending email:", error.message);
      alert("Failed to send email. Please try again later.");
    }
  };

  if (loading) {
    return <div className="loading">Loading approved applications...</div>;
  }

  return (
    <div className="manage-pass-container">
      <Sidenav />
      <h2>Manage Pass</h2>
      {approvedApplications.length > 0 ? (
        <table className="manage-pass-table">
          <thead>
            <tr>
              <th>S.NO</th>
              <th>Pass Number</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Roll Number</th>
              <th>Institution</th>
              <th>Department</th>
              <th>Address</th>
              <th>Stage</th>
              <th>Bus No.</th>
              <th>Seat No.</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {approvedApplications.map((app, index) => (
              <tr key={app.pass_number}>
                <td>{index + 1}</td>
                <td>{app.pass_number}</td>
                <td>{app.name}</td>
                <td>{app.email}</td>
                <td>{app.roll_number}</td>
                <td>{app.institution}</td>
                <td>{app.department}</td>
                <td>{app.address}</td>
                <td>{app.stage}</td>
                <td>{app.bus}</td>
                <td>{app.seat}</td>
                <td>{new Date(app.creation_date).toLocaleString()}</td>
                <td>
                  <button
                    className="action-btn"
                    onClick={() => {
                      sendEmail(app);
                      handleView(app);
                    }}
                  >
                    View & Email
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data">No approved applications found.</div>
      )}

      {selectedApplication && (
        <div className="modal">
          <div className="modal-content">
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <div className="bus-pass">
              <h3 className="bus-pass-title">BUS PASS</h3>
              <p>
                Gayathri Educational Development Society - Narasaraopeta -
                522601.
              </p>
              <p>NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)</p>
              <hr />
              <div className="bus-pass-row">
                <span>
                  <strong>Pass Number:</strong> {selectedApplication.pass_number}
                </span>
                <span>
                  <strong>Course:</strong> {selectedApplication.institution}{" "}
                  {selectedApplication.department}
                </span>
                <span>
                  <strong>Date:</strong>{" "}
                  {new Date(selectedApplication.creation_date).toLocaleString()}
                </span>
              </div>
              <p>
                <strong>Name:</strong> {selectedApplication.name}
              </p>
              <p>
                <strong>Roll Number:</strong>{" "}
                {selectedApplication.roll_number}
              </p>
              <p>
                <strong>Address:</strong> {selectedApplication.address}
              </p>
              <p>
                <strong>Stage:</strong> {selectedApplication.stage}
              </p>
              <p>
                <strong>Bus Number:</strong> {selectedApplication.bus}
              </p>
              <p>
                <strong>Seat Number:</strong> {selectedApplication.seat}
              </p>
              <span>
                <strong>Valid up to Academic Year:</strong>{" "}
                {`${new Date(
                  selectedApplication.creation_date
                ).getFullYear()} - ${
                  new Date(selectedApplication.creation_date).getFullYear() + 1
                }`}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManagePass;
