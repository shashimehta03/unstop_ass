// Seat.js
import React from 'react';

const Seat = ({ seat }) => {
  return (
    <div 
      className={`seat ${seat.isBooked ? 'booked' : 'available'}`} 
      title={seat.isBooked 
        ? `Name: ${seat.userDetails ? seat.userDetails.name : 'RESERVED'}, 
           Age: ${seat.userDetails ? seat.userDetails.age : 'N/A'}, 
           Gender: ${seat.userDetails ? seat.userDetails.gender : 'N/A'}` 
        : 'Available'}>
      {seat.seatNumber}
    </div>
  );
};

export default Seat;
