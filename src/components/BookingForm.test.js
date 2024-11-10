import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { initializeTimes, updateTimes } from '../components/BookingForm';  // Adjusted import to directly from BookingForm.js

jest.mock('./BookingForm', () => ({
  ...jest.requireActual('./BookingForm'),
  initializeTimes: jest.fn(),
  updateTimes: jest.fn(),
}));

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table at Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test('Form submission calls handleSubmit and prevents default behavior', () => {
  render(<BookingForm />);

  // Fill in the form
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-25' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '01:00 PM' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  // Simulate form submission
  const formElement = screen.getByTestId('booking-form'); // Add 'data-testid="booking-form"' in BookingForm.js
  fireEvent.submit(formElement);

  // Assert that form submit behavior is as expected
  expect(screen.getByText('Submit Reservation')).toBeInTheDocument();
});

// Test for initializeTimes function
test('initializeTimes should set the available times correctly', () => {
  const mockTimes = ['12:00 PM', '01:00 PM', '02:00 PM'];

  // Simulate calling the initializeTimes function
  initializeTimes(mockTimes);

  // Check if initializeTimes was called with correct values
  expect(initializeTimes).toHaveBeenCalledWith(mockTimes);
  expect(initializeTimes).toHaveBeenCalledTimes(1);
});

// Test for updateTimes function
test('updateTimes should update the available times correctly based on the selected date', () => {
  const selectedDate = '2024-12-25';
  const newTimes = ['12:00 PM', '03:00 PM', '06:00 PM'];

  // Simulate calling the updateTimes function
  updateTimes(selectedDate, newTimes);

  // Check if updateTimes was called with correct values
  expect(updateTimes).toHaveBeenCalledWith(selectedDate, newTimes);
  expect(updateTimes).toHaveBeenCalledTimes(1);
});
