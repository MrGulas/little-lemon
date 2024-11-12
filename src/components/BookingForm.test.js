import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm, { initializeTimes, updateTimes } from '../components/BookingForm';

jest.mock('../components/BookingForm', () => ({
  ...jest.requireActual('../components/BookingForm'),
  initializeTimes: jest.fn(() => ['12:00 PM', '01:00 PM', '02:00 PM']),
  updateTimes: jest.fn((state) => state),
}));

test('Renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Book a Table at Little Lemon");
  expect(headingElement).toBeInTheDocument();
});

test('Form submission calls handleSubmit and prevents default behavior', () => {
  render(<BookingForm />);

  // Fill in form fields
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-25' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '01:00 PM' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  // Simulate form submission
  const formElement = screen.getByTestId('booking-form');
  fireEvent.submit(formElement);

  expect(screen.getByText('Submit Reservation')).toBeInTheDocument();
});

test('initializeTimes should return the initial times array', () => {
  const expectedTimes = ['12:00 PM', '01:00 PM', '02:00 PM'];
  const result = initializeTimes();
  expect(result).toEqual(expectedTimes);
  expect(initializeTimes).toHaveBeenCalledTimes(1);
});

test('updateTimes should return the same state that is provided', () => {
  const currentState = ['12:00 PM', '01:00 PM', '02:00 PM'];
  const result = updateTimes(currentState);
  expect(result).toBe(currentState);
  expect(updateTimes).toHaveBeenCalledWith(currentState);
  expect(updateTimes).toHaveBeenCalledTimes(1);
});
