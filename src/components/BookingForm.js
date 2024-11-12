import React, { useState, useEffect } from 'react';

export default function BookingForm() {
  const [times, setTimes] = useState([]); // Holds available times
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resDate: '',
    resTime: '',
    guests: 1,
    occasion: '',
  });

  // Declare fetchAPI and submitAPI inside the component scope
  const [apiLoaded, setApiLoaded] = useState(false); // Track if the API script is loaded

  const fetchAvailableTimes = (date) => {
    // Check if fetchAPI is available after the script is loaded
    if (window.fetchAPI) {
      const availableTimes = window.fetchAPI(new Date(date)); // Call fetchAPI with the selected date
      setTimes(availableTimes); // Set the available times in state
    } else {
      console.error('fetchAPI is not defined');
    }
  };

  // Load the API script dynamically on component mount
  useEffect(() => {
    const loadScript = (url) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve();
        script.onerror = () => reject(new Error(`Failed to load script: ${url}`));
        document.body.appendChild(script);
      });
    };

    loadScript('https://raw.githubusercontent.com/courseraap/capstone/main/api.js')
      .then(() => {
        console.log('API script loaded successfully');
        setApiLoaded(true); // Mark the script as loaded
      })
      .catch((error) => {
        console.error('Error loading the API script:', error);
      });
  }, []); // Empty dependency array to run this effect only once when the component mounts

  // Update available times when the selected date changes
  useEffect(() => {
    if (formData.resDate && apiLoaded) {
      fetchAvailableTimes(formData.resDate); // Fetch available times based on the selected date
    }
  }, [formData.resDate, apiLoaded]); // Add apiLoaded to the dependency array

  const handleSubmit = (event) => {
    event.preventDefault();
    // Ensure submitAPI is loaded and available
    if (window.submitAPI) {
      const result = window.submitAPI(formData); // submitAPI should be available after the script is loaded
      if (result) {
        console.log('Reservation successfully submitted', formData);
      } else {
        console.log('There was an issue with the reservation');
      }
    } else {
      console.error('submitAPI is not defined');
    }
  };

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
          {times.map((time, index) => (
            <option key={index} value={time}>
              {time}
            </option>
          ))}
        </select>
        <label htmlFor="guests">Number of Guests</label>
        <input
          id="guests"
          type="number"
          min="1"
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
}
