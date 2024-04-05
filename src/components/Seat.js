// Seat.js
import React from 'react';

function Seat({ seatNumber, reserved }) {
  return (
    <div>
      <button disabled={reserved}>{seatNumber}</button>
    </div>
  );
}

export default Seat;
