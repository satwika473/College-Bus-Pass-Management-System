import React, { useState } from "react";
import "./Viewpass.css"; // Create and add styles for the component
import Sidenav from "./Sidenav";
import '../Admin/ManagePass.css';
import '../Admin/Mainpage.css';
export const Viewpass = () => {
  const [passNumber, setPassNumber] = useState("");
  const [busPassDetails, setBusPassDetails] = useState(null); // Store fetched pass details
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!passNumber) {
      setError("Please enter a pass number");
      return;
    }

    try {
      const response = await fetch(
        `http://localhost:3001/api/approved_applications/${passNumber}`
      );

      if (!response.ok) {
        throw new Error("Pass not found");
      }

      const data = await response.json();
      setBusPassDetails(data); // Set fetched details to show in modal
      setError(""); // Clear error message
    } catch (err) {
      setError(err.message);
      setBusPassDetails(null); // Clear existing modal if error occurs
    }
  };

  const closeModal = () => {
    setBusPassDetails(null); // Close modal
  };

  return (
    <div className="search-container">
        <Sidenav/>
      <h1>View Pass by Pass Number</h1>
      <div className="search-bar">
        <input className="ip"
          type="text"
          placeholder="Enter pass number"
          value={passNumber}
          onChange={(e) => setPassNumber(e.target.value)}
        />
        <button className="search-btn" onClick={handleSearch}>
          <i className="fas fa-search"></i> Search
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}

      {/* Modal to display bus pass */}
      {busPassDetails && (
         <div className="modal">
         <div className="modal-content">
           <button className="close-btn" onClick={closeModal}>
             &times;
           </button>
           <div className="bus-pass">
             <h3 className="bus-pass-title">BUS PASS</h3>
             <p>Gayathri Educational Development Society- Narasaraopeta - 522601.</p>
             <p>NARASARAOPETA ENGINEERING COLLEGE (AUTONOMOUS)</p><hr></hr>

             <div className="bus-pass-row">
 <span>
   <strong>Pass Number:</strong> {busPassDetails.pass_number}
 </span>
 <span>
   <strong>Course:</strong> {busPassDetails.institution} {busPassDetails.department}
 </span>
 
 <span>
   <strong>Date:</strong>{" "}
   {new Date(busPassDetails.creation_date).toLocaleString()}
 </span>
</div>
             <p>
               <strong>Name:</strong> {busPassDetails.name}
             </p>
             <p>
               <strong>Roll Number:</strong> {busPassDetails.roll_number}
             </p>
             
             
             <p>
               <strong>Address:</strong> {busPassDetails.address}
             </p>
             <p>
               <strong>Stage:</strong> {busPassDetails.stage}
             </p>
             <p>
               <strong>Bus Number:</strong> {busPassDetails.bus}
             </p>
             <p>
               <strong>Seat Number:</strong> {busPassDetails.seat}
             </p>
             <span>
   <strong>Valid up to Academic Year:</strong>{" "}
   {`${new Date(busPassDetails.creation_date).getFullYear()} - ${
     new Date(busPassDetails.creation_date).getFullYear() + 1
   }`}
 </span>
             
            
           </div>
         </div>
       </div>
      )}
    </div>
  );
};


