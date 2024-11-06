import React from 'react';

const testimonials = [
  { id: 1, name: 'Alice', review: 'Amazing food!', rating: 5 },
  { id: 2, name: 'Bob', review: 'Great atmosphere!', rating: 4 },
  // Add more testimonials here
];

const CustomersSay = () => {
  return (
    <section className="testimonials">
      <h2>What Our Customers Say</h2>
      <ul>
        {testimonials.map(testimonial => (
          <li key={testimonial.id}>
            <p>{testimonial.review}</p>
            <p>Rating: {testimonial.rating} stars</p>
            <p>- {testimonial.name}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default CustomersSay;
