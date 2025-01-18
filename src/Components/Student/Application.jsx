import React, { useState } from "react";
import "./Application.css";

const Application = ({ selectedRoute, selectedStage, selectedBus }) => {
  const [formData, setFormData] = useState({
    name: "",
    rollNumber: "",
    institution: "",
    department: "",
    email: "",
    phone: "",
    address: "",
    seat: "",
  });

  const [inputArr, setInputArr] = useState([]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const application = {
      name: formData.name,
      rollNumber: formData.rollNumber,
      institution: formData.institution,
      department: formData.department,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      route: selectedRoute,
      stage: selectedStage,
      bus: selectedBus,
      seat: formData.seat,
    };

    console.log("Application Data:", application); // Debugging log

    try {
      const response = await fetch("http://localhost:3001/api/applications", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(application),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result.message);

        setInputArr([...inputArr, application]);
        alert("Bus Pass Application Submitted Successfully!");

        setFormData({
          name: "",
          rollNumber: "",
          institution: "",
          department: "",
          email: "",
          phone: "",
          address: "",
          seat: "",
        });
      } else {
        alert("Failed to submit the application. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the application.");
    }
  };

  return (
    <div className="application-form-container">
      <h2>Bus Pass Application Form</h2>
      <form onSubmit={handleSubmit} className="application-form">
        <div className="form-group">
          <label>Selected Route</label>
          <input type="text" value={selectedRoute} readOnly />
        </div>

        <div className="form-group">
          <label>Selected Stage</label>
          <input type="text" value={selectedStage} readOnly />
        </div>

        <div className="form-group">
          <label>Selected Bus Number</label>
          <input type="text" value={selectedBus} readOnly />
        </div>

        <div className="form-group">
          <label>Selected Seat</label>
          <input
            type="text"
            name="seat"
            value={formData.seat}
            onChange={handleChange}
            placeholder="Enter your seat number"
            required
          />
        </div>

        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="form-group">
          <label>Roll Number</label>
          <input
            type="text"
            name="rollNumber"
            value={formData.rollNumber}
            onChange={handleChange}
            placeholder="Enter your roll number"
            required
          />
        </div>
        <div className="form-group">
          <label>Institution</label>
          <select
            name="institution"
            value={formData.institution} // Fixed the value here
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your Institution
            </option>
            <option value="nec">NEC</option>
            <option value="nit">NIT</option>
            <option value="nips">NIPS</option>
          </select>
        </div>
        <div className="form-group">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select your department
            </option>
            <option value="CSE">CSE</option>
            <option value="ECE">ECE</option>
            <option value="MECH">MECH</option>
            <option value="CIVIL">CIVIL</option>
            <option value="EEE">EEE</option>
            <option value="pharmd">PHARMD</option>
            <option value="pharmc">PHARMC</option>
          </select>
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            required
          />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Enter your address"
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default Application;
