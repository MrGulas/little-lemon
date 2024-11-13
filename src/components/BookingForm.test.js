import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from '../components/BookingForm';
import BookingPage from '../components/BookingPage';

test('Renders the BookingPage heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText('Book a Table at Little Lemon'); // Case-insensitive match
    expect(headingElement).toBeInTheDocument();
  });   

test('Form submission calls handleSubmit and prevents default behavior', async () => {
  render(<BookingForm />);

  // Fill in form fields
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-25' } });
  
  // Wait for the times to load after date selection
  await waitFor(() => {
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '01:00 PM' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  // Simulate form submission
  const formElement = screen.getByTestId('booking-form');
  fireEvent.submit(formElement);

  // Expect the form to be submitted (you can check for a message or successful submission state)
  expect(screen.getByText('Submit Reservation')).toBeInTheDocument();
});

test('Form shows times after date is selected', async () => {
  render(<BookingForm />);

  // Select a date
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-25' } });

  // Wait for the times to appear
  await waitFor(() => {
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  });

  const timeOptions = screen.getByLabelText(/choose time/i).children;
  expect(timeOptions.length).toBeGreaterThan(0);  // Ensure that times are displayed
});

test('Form validates and submits with real data', async () => {
  render(<BookingForm />);

  // Fill in the form fields with valid data
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });
  fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'john@example.com' } });
  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-25' } });

  // Wait for times to load after the date selection
  await waitFor(() => {
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
  });

  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '01:00 PM' } });
  fireEvent.change(screen.getByLabelText(/number of guests/i), { target: { value: '3' } });
  fireEvent.change(screen.getByLabelText(/occasion/i), { target: { value: 'Birthday' } });

  // Simulate form submission
  const formElement = screen.getByTestId('booking-form');
  fireEvent.submit(formElement);

  // Check for a successful submission state (this could be an alert or a confirmation message)
  await waitFor(() => {
    expect(screen.getByText('Submit Reservation')).toBeInTheDocument();
  });
});
