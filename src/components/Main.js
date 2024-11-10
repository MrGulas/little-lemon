import React, { useState, useReducer } from 'react';
import BookingForm from './BookingForm';

const Main = () => {
  const initialState = {
    availableTimes: [],
    selectedDate: '',
  };

  const timeReducer = (state, action) => {
    switch (action.type) {
      case 'UPDATE_DATE':
        const updatedTimes = action.date ? ['17:00', '18:00', '19:00', '20:00', '21:00'] : [];
        return {
          ...state,
          availableTimes: updatedTimes,
          selectedDate: action.date,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(timeReducer, initialState);

  return (
    <div>
      <h1>Little Lemon Table Reservation</h1>
      <BookingForm
        availableTimes={state.availableTimes}
        dispatch={dispatch}
      />
    </div>
  );
};

export default Main;
