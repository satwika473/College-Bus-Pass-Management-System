import React, { useState, useEffect } from "react";
import Sidenav from "./Sidenav";
import Buslayout from "./Buslayout";
import ApplicationForm from "./Application";
import './Busdetail.css';
// Assuming this component is responsible for displaying applications
//import Main from './Components/DeptCordinator/Main';

const Busdetails = () => {
  const [routes, setRoutes] = useState([]);
  const [selectedRoute, setSelectedRoute] = useState("");
  const [stages, setStages] = useState([]);
  const [showStages, setShowStages] = useState(false);
  const [selectedStage, setSelectedStage] = useState(null);
  const [buses, setBuses] = useState([]);
  const [showBusLayout, setShowBusLayout] = useState(false);
  const [selectedBus, setSelectedBus] = useState(null);
  const [selectedSeat, setSelectedSeat] = useState(null); // Track selected seat
  const [applications, setApplications] = useState([]);  // Store applications here
  
  useEffect(() => {
    fetch("http://localhost:3001/api/routes")
      .then((response) => response.json())
      .then((data) => setRoutes(data))
      .catch((error) => console.error("Error fetching routes:", error));
  }, []);

  const handleCheckAvailability = () => {
    if (selectedRoute) {
      fetch(`http://localhost:3001/api/stages?route_id=${selectedRoute}`)
        .then((response) => response.json())
        .then((data) => {
          setStages(data);
          setShowStages(true);
        })
        .catch((error) => console.error("Error fetching stages:", error));
    } else {
      alert("Please select a route first!");
    }
  };

  const handleStageClick = (stage) => {
    setSelectedStage(stage);
    fetch(`http://localhost:3001/api/buses?route_id=${selectedRoute}`)
      .then((response) => response.json())
      .then((data) => setBuses(data))
      .catch((error) => console.error("Error fetching buses:", error));
  };

  const handleBusClick = (bus) => {
    setSelectedBus(bus);
    setShowBusLayout(true);
  };

  const handleSeatSelection = (seatId) => {
    setSelectedSeat(seatId); // Track selected seat
  };

  const addApplication = (application) => {
    setApplications([...applications, application]); // Add new application to the list
  };

  return (
    <div style={{ margin: "20px" }}>
      <Sidenav />
      <h1>Bus Route Selection</h1>
      <div style={{ marginBottom: "10px" }}>
        <p>From:</p>
        <select
          id="from"
          value={selectedRoute}
          onChange={(e) => {
            setSelectedRoute(e.target.value);
            setShowStages(false);
            setShowBusLayout(false);
          }}
        >
          <option value="" disabled>
            Select a Route
          </option>
          {routes?.map((route) => (
            <option key={route.route_id} value={route.route_id}>
              {route.route_name}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <label htmlFor="to">To: </label>
        <input type="text" id="to" value="College" disabled />
      </div>

      <button type="button" onClick={handleCheckAvailability}>
        Check Availability
      </button>

      {showStages && stages?.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Available Stages</h2>
          {stages?.map((stage) => (
            <p
              key={stage.stage_id}
              className={`stage-item ${
                selectedStage?.stage_id === stage.stage_id ? "selected" : ""
              }`}
              onClick={() => handleStageClick(stage)}
              style={{
                cursor: "pointer",
                padding: "10px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                margin: "5px 0",
              }}
            >
              {stage.stage_name} - ₹{stage.fee}
            </p>
          ))}
        </div>
      )}

      {showStages && buses?.length > 0 && (
        <div style={{ marginTop: "20px" }}>
          <h2>Available Buses</h2>
          {buses?.map((bus) => (
            <button
              key={bus.bus_id}
              style={{
                padding: "20px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                backgroundColor: "#007bff",
                color: "white",
                cursor: "pointer",
              }}
              onClick={() => handleBusClick(bus)}
            >
              Bus Number: {bus.bus_number}
            </button>
          ))}
        </div>
      )}

      {showBusLayout && selectedBus && (
        <Buslayout
          selectedBus={selectedBus}
          onSeatSelect={handleSeatSelection}
        />
      )}

      <ApplicationForm
        selectedRoute={selectedRoute}
        selectedStage={selectedStage?.stage_name}
        selectedBus={selectedBus?.bus_number}
        selectedSeat={selectedSeat}
        addApplication={addApplication} // Pass addApplication to ApplicationForm
      />

      {/* Pass applications to CoordinatorPanel 
      <Main applications={applications} />*/}
    </div>
  );
};

export default Busdetails;
