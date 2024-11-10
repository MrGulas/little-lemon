import React, { useState } from 'react';

const BookingForm = () => {
  const [times, setTimes] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resDate: '',
    resTime: '',
    guests: 1,
    occasion: '',
  });

  const initializeTimes = () => ['12:00 PM', '01:00 PM', '02:00 PM'];

  const updateTimes = (newTimes) => {
    setTimes(newTimes);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted', formData);
  };

  const initialTimes = initializeTimes();

  return (
    <div>
      <form onSubmit={handleSubmit} data-testid="booking-form" style={{ display: 'grid', maxWidth: '300px', gap: '15px' }}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />
        <label htmlFor="res-date">Choose date</label>
        <input
          id="res-date"
          type="date"
          value={formData.resDate}
          onChange={(e) => setFormData({ ...formData, resDate: e.target.value })}
        />
        <label htmlFor="res-time">Choose time</label>
        <select
          id="res-time"
          value={formData.resTime}
          onChange={(e) => setFormData({ ...formData, resTime: e.target.value })}
        >
          {initialTimes.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of Guests</label>
        <input
          id="guests"
          type="number"
          value={formData.guests}
          onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
        />
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          value={formData.occasion}
          onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
        </select>
        <button type="submit">Submit Reservation</button>
      </form>
    </div>
  );
};

export default BookingForm;
