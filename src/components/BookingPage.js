import React, { useState } from 'react';

const BookingPage = () => {
  const [formData, setFormData] = useState({ date: '', time: '', guests: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle booking submission
    alert(`Booking confirmed for ${formData.guests} guests on ${formData.date} at ${formData.time}`);
  };

  return (
    <section className="booking">
      <h2>Book a Table</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Date:
          <input type="date" name="date" onChange={handleChange} required />
        </label>
        <label>
          Time:
          <input type="time" name="time" onChange={handleChange} required />
        </label>
        <label>
          Guests:
          <input type="number" name="guests" min="1" max="10" onChange={handleChange} required />
        </label>
        <button type="submit">Reserve</button>
      </form>
    </section>
  );
};

export default BookingPage;
