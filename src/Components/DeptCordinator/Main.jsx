import React, { useEffect, useState } from 'react';
import './Main.css';
import Sidenav from './Sidenav';

const Main = () => {
  const [applications, setApplications] = useState([]);

  useEffect(() => {
    // Fetch data from the backend
    const fetchApplications = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/applications');
        if (response.ok) {
          const data = await response.json();
          setApplications(data);
        } else {
          console.error('Failed to fetch applications');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchApplications();
  }, []);

  // Handle Verify-Forward
  const handleVerifyForward = async (app) => {
    try {
      const response = await fetch('http://localhost:3001/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(app),
      });

      if (response.ok) {
        alert('Application verified and forwarded successfully!');
        // Optionally, remove the row from the current table
        setApplications(applications.filter((application) => application.id !== app.id));
      } else {
        alert('Failed to verify application.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while verifying the application.');
    }
  };

  // Handle Cancel
  const handleCancel = async (appId) => {
    try {
      const response = await fetch(`http://localhost:3001/api/cancel/${appId}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        alert('Application cancelled successfully!');
        // Remove the row from the current table
        setApplications(applications.filter((application) => application.id !== appId));
      } else {
        alert('Failed to cancel application.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while cancelling the application.');
    }
  };

  return (
    <div className="applications-table-container">
      <Sidenav />
      <h2>Bus Pass Applications</h2>
      <table className="applications-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Roll Number</th>
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
          {applications.length > 0 ? (
            applications.map((app) => (
              <tr key={app.id}>
                <td>{app.id}</td>
                <td>{app.name}</td>
                <td>{app.roll_number}</td>
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
                    onClick={() => handleVerifyForward(app)}
                  >
                    Verify-Forward
                  </button>
                  <button
                    className="cancel-btn"
                    onClick={() => handleCancel(app.id)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="12">No applications found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Main;
