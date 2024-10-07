// App.js
import React, { useState } from 'react';
import SeatMap from './seatmap';
import BookingForm from './bookingform';
import '../styles/styles.css';

const App = () => {
  const totalSeats = 80;

  const initialSeats = Array.from({ length: totalSeats }, (_, index) => {
    const seatNumber = index + 1;
    return {
      seatNumber,
      isBooked: seatNumber === 1 || seatNumber === 15 || seatNumber === 50,
      row: Math.ceil(seatNumber / 7),
      userDetails: null,
    };
  });

  const [seats, setSeats] = useState(initialSeats);

  const bookSeats = (seatCount, userDetails) => {
    const availableSeats = seats.filter((seat) => !seat.isBooked);
    if (availableSeats.length < seatCount) {
      alert('Not enough seats available.');
      return;
    }

    const seatsToBook = findSeats(seatCount, availableSeats);
    if (seatsToBook.length !== seatCount) {
      alert('Could not find contiguous seats.');
      return;
    }

    const updatedSeats = seats.map((seat) => {
      if (seatsToBook.includes(seat.seatNumber)) {
        return { ...seat, isBooked: true, userDetails };
      }
      return seat;
    });

    setSeats(updatedSeats);
  };

  const findSeats = (seatCount, availableSeats) => {
    let seatsToBook = [];

    for (let i = 0; i < availableSeats.length; i++) {
      const row = availableSeats[i].row;
      const sameRowSeats = availableSeats.filter((seat) => seat.row === row);

      if (sameRowSeats.length >= seatCount) {
        seatsToBook = sameRowSeats.slice(0, seatCount).map((seat) => seat.seatNumber);
        break;
      }
    }

    if (seatsToBook.length < seatCount) {
      seatsToBook = availableSeats.slice(0, seatCount).map((seat) => seat.seatNumber);
    }

    return seatsToBook;
  };

  return (
    <div>
      <h1>Train Seat Reservation</h1>
      <BookingForm bookSeats={bookSeats} />
      <SeatMap seats={seats} />
    </div>
  );
};

export default App;
