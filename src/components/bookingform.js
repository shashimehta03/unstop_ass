// BookingForm.js
import React, { useState } from 'react';

const BookingForm = ({ bookSeats }) => {
  const [seatCount, setSeatCount] = useState(1);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const userDetails = { name, age, gender };
    bookSeats(seatCount, userDetails);
    setSeatCount(1);
    setName('');
    setAge('');
    setGender('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Number of Seats:
        <input
          type="number"
          min="1"
          max="7"
          value={seatCount}
          onChange={(e) => setSeatCount(parseInt(e.target.value, 10))}
        />
      </label>
      <br />
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Age:
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          required
        />
      </label>
      <br />
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </label>
      <br />
      <button type="submit">Book Seats</button>
    </form>
  );
};

export default BookingForm;
