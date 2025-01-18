import React, { useState } from 'react';
import { addRoute } from './api';
import './Addbusdetails.css';
import Sidenav from './Sidenav';

const Addbusdetails = () => {
  const [routeName, setRouteName] = useState('');
  const [stages, setStages] = useState([{ name: '', fee: '' }]);
  const [buses, setBuses] = useState(['']);

  const handleAddStage = () => setStages([...stages, { name: '', fee: '' }]);
  const handleAddBus = () => setBuses([...buses, '']);

  const handleRemoveStage = (index) => {
    const newStages = stages.filter((_, idx) => idx !== index);
    setStages(newStages);
  };

  const handleRemoveBus = (index) => {
    const newBuses = buses.filter((_, idx) => idx !== index);
    setBuses(newBuses);
  };

  const handleSubmit = async (e) => {
    console.log('clicked');
    e.preventDefault();
    const data = { routeName, stages, buses };
    try {
      const response = await addRoute(data);
      alert(response.message);
      setRouteName('');
      setStages([{ name: '', fee: '' }]);
      setBuses(['']);
    } catch (err) {
      alert('Error adding route: ' + err.message);
    }
  };

  return (
    
    <div className="container">
      <Sidenav/>
      <h2>Add Bus Details</h2>
      
        <div>
          <label>Route Name:</label>
          <input
            value={routeName}
            onChange={(e) => setRouteName(e.target.value)}
            required
          />
        </div>

        <div className="stage-container">
          <h3>Stages</h3>
          {stages.map((stage, idx) => (
            <div key={idx} className="stage-row">
              <input
                placeholder="Stage Name"
                value={stage.name}
                onChange={(e) => {
                  const newStages = [...stages];
                  newStages[idx].name = e.target.value;
                  setStages(newStages);
                }}
                required
              />
              <input
                placeholder="Fee"
                type="number"
                value={stage.fee}
                onChange={(e) => {
                  const newStages = [...stages];
                  newStages[idx].fee = e.target.value;
                  setStages(newStages);
                }}
                required
              />
              <button
                type="button"
                className="remove-button"
                onClick={() => handleRemoveStage(idx)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddStage}>
            Add Stage
          </button>
        </div>

        <div className="bus-container">
          <h3>Buses</h3>
          {buses.map((bus, idx) => (
            <div key={idx} className="bus-row">
              <input
                placeholder="Bus Number"
                value={bus}
                onChange={(e) => {
                  const newBuses = [...buses];
                  newBuses[idx] = e.target.value;
                  setBuses(newBuses);
                }}
                required
              />
              <button
                type="button"
                className="remove-button"
                onClick={() => handleRemoveBus(idx)}
              >
                Remove
              </button>
            </div>
          ))}
          <button type="button" onClick={handleAddBus}>
            Add Bus
          </button>
        </div>

        <button type="submit"onClick={handleSubmit}>Submit</button>
      
    </div>
  );
};

export default Addbusdetails;
