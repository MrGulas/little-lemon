import React from 'react';
import BookingForm from './BookingForm';

const BookingPage = () => {
  return (
    <div className='container'>
    <div className='booking'>
    <h2>Book a Table at Little Lemon</h2>
      <p>Reserve a table for a special occasion!</p>
      <BookingForm />
    </div>
    </div>
  );
};

export default BookingPage;
