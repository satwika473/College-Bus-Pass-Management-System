import React, { useState } from "react";
import "./Buslayout.css";

function Buslayout() {
  // Generate seats layout with the given conditions
  const generateSeats = () => {
    const rows = [];
    let seatId = 0; // Start seat ID from 1

    // First row has 1 seat
    rows.push([{ id: seatId++, booked: Math.random() < 0.3 }]);

    // Rows from 2nd onward (5 seats per row)
    for (let row = 2; row <= 12; row++) {
      const rowSeats = [];
      for (let i = 0; i < 5; i++) {
        rowSeats.push({
          id: seatId++, // Increment seat ID for each seat
          booked: Math.random() < 0.3, // Randomly set 30% of seats as booked
        });
      }
      rows.push(rowSeats);
    }

    // Last row with no gap or pairs (remaining seats in the last row)
    const lastRow = [];
    for (let i = 0; i < 5; i++) {
      lastRow.push({
        id: seatId++, // Increment seat ID for each seat
        booked: Math.random() < 0.3,
      });
    }
    rows.push(lastRow);

    return rows;
  };

  const selectedBus1 = {
    name: "Bus 1",
    seats: generateSeats(),
  };

  const [selectedSeat, setSelectedSeat] = useState(null);

  const toggleSeatSelection = (index, rowIndex) => {
    const seat = selectedBus1.seats[rowIndex][index];

    // Check if the seat is already booked
    if (seat.booked) {
      alert(`Seat ${seat.id} is already booked!`);
      return;
    }

    // Toggle seat selection: Allow only one seat to be selected at a time
    if (selectedSeat === seat.id) {
      // Deselect seat if already selected
      setSelectedSeat(null);
    } else {
      // Select the new seat
      setSelectedSeat(seat.id);
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Bus Layout for {selectedBus1?.name}</h1>

        <div className="seats">
          <h2>Seat Selection</h2>
          <div className="seat-layout">
            {selectedBus1?.seats?.map((row, rowIndex) => (
              <div className="seat-row" key={rowIndex}>
                {row.map((seat, index) => (
                  <button
                    key={seat.id} // Use seat.id as the key
                    className={`seat ${
                      seat.booked
                        ? "booked"
                        : selectedSeat === seat.id
                        ? "selected"
                        : "available"
                    }`}
                    onClick={() => toggleSeatSelection(index, rowIndex)}
                    title={`Seat ${seat.id}`}
                    disabled={seat.booked} // Disable button if the seat is booked
                  >
                    {seat.id}
                  </button>
                ))}
              </div>
            ))}
          </div>

          {selectedSeat && (
            <div className="selected-info">
              <h3>Selected Seat</h3>
              <p>{selectedSeat}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Buslayout;
