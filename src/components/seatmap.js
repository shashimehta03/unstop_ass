// SeatMap.js
import React from 'react';
import Seat from './seats';

const SeatMap = ({ seats }) => {
  return (
    <div className="seat-map">
      {seats.map((seat) => (
        <Seat key={seat.seatNumber} seat={seat} />
      ))}
    </div>
  );
};

export default SeatMap;
