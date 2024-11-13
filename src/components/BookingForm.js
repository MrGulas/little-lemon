import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function BookingForm() {
  const [times, setTimes] = useState(['12:00', '13:00', '14:00', '15:00', '16:00']); // Hardcoded available times

  // Validation schema using Yup
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    resDate: Yup.date().required('Date is required'),
    resTime: Yup.string().required('Time is required'),
    guests: Yup.number().min(1, 'Minimum 1 guest required').required('Number of guests is required'),
    occasion: Yup.string().required('Occasion is required'),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          email: '',
          resDate: '',
          resTime: '',
          guests: 1,
          occasion: '',
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log("Reservation successfully submitted", values);
          setSubmitting(false);
        }}
      >
        {({ values, setFieldValue }) => (
          <Form data-testid="booking-form" style={{ display: 'grid', maxWidth: '300px', gap: '15px' }}>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" type="text" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />

            <label htmlFor="email">Email</label>
            <Field id="email" name="email" type="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

            <label htmlFor="resDate">Choose date</label>
            <Field
              id="resDate"
              name="resDate"
              type="date"
              onChange={(e) => {
                setFieldValue("resDate", e.target.value);
              }}
            />
            <ErrorMessage name="resDate" component="div" style={{ color: 'red' }} />

            <label htmlFor="resTime">Choose time</label>
            <Field as="select" id="resTime" name="resTime">
              <option value="">Select a time</option>
              {times.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </Field>
            <ErrorMessage name="resTime" component="div" style={{ color: 'red' }} />

            <label htmlFor="guests">Number of Guests</label>
            <Field id="guests" name="guests" type="number" min="1" />
            <ErrorMessage name="guests" component="div" style={{ color: 'red' }} />

            <label htmlFor="occasion">Occasion</label>
            <Field as="select" id="occasion" name="occasion">
              <option value="">Select an occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Anniversary">Anniversary</option>
            </Field>
            <ErrorMessage name="occasion" component="div" style={{ color: 'red' }} />

            <button type="submit">Submit Reservation</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
