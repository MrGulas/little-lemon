import React from 'react';
import SaraImg from '../images/sara.png'


const testimonials = [
  { id: 1, name: 'Alice Tiderman', review: 'Seriously cannot stop thinking about the Turkish Mac n Cheese!!', rating: 5, img: SaraImg},
  { id: 2, name: 'Bob Wales', review: 'We had such a great time celebrating my grandmothers bitthday!', rating: 4, img: SaraImg },
  { id: 3, name: 'Bob Wales', review: 'Great atmosphere!', rating: 4, img: SaraImg },
  { id: 4, name: 'Bob Wales', review: 'Great atmosphere!', rating: 4, img: SaraImg }
  // Add more testimonials here
];


const CustomersSay = () => {
  const renderStars = (rating) => {
    return (
      <span className="stars">
        {Array.from({ length: 5 }, (_, index) => (
          <span
            key={index}
            style={{
              color: index < rating ? '#FFD700' : '#d3d3d3', 
              fontSize: '35px', 
            }}
          >
            {index < rating ? '★' : '☆'}
          </span>
        ))}
      </span>
    );
  };
  return (
    <>
    <div className='backgroundTestimonials'></div>
    <div className='container'>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <ul>
          {testimonials.map(testimonial => (
            <li key={testimonial.id}>
              <p className='stars'>{renderStars(testimonial.rating)}</p>
              <p className='content'><img src={testimonial.img} alt={testimonial.name}></img>{testimonial.name}</p>
              <p className='review'>{testimonial.review}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  );
};

export default CustomersSay;
