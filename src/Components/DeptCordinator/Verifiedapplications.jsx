import React, { useEffect, useState } from "react";
import "./Verifiedapplications.css";
import Sidenav from "./Sidenav";

const Verifiedapplications = () => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch verified applications from the backend
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

  if (loading) {
    return <div className="loading">Loading applications...</div>;
  }

  return (
    <div className="applications-table-container">
        <Sidenav/>
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
                
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="no-data">No verified applications found.</div>
      )}
    </div>
  );
};

export default Verifiedapplications;
