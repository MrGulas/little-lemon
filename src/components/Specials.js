import React from 'react';
import greekSaladImg from '../images/greek_salad.png';
import bruchetta from '../images/bruchetta.png'
import lemonDessert from '../images/lemon_dessert.png'
import deliveryIcon from '../images/delivery_icon.png'

const specialsData = [
  { id: 1, name: 'Greek Salad', description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ', price: '$12.99', img: greekSaladImg },
  { id: 2, name: 'Bruchetta', description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ', price: '$5.99', img: bruchetta },
  { id: 2, name: 'Lemon Dessert', description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.', price: '$5.00', img: lemonDessert }
];

const Specials = () => {
  return (
    <div className='container'>
    <section className="specials">
      <h2>Today's Specials</h2>
      <ul>
        {specialsData.map(special => (
          <li key={special.id}>
            <div className='card'>
            <img src={special.img} alt={special.name}></img>
            <div className='card_content'>
            <div className='card_header'>
            <h3>{special.name}</h3>
            <p>{special.price}</p>
            </div>
            <p>{special.description}</p>
            <p className='order'>Order a Delivery <img src={deliveryIcon} alt="Delivery icon"></img></p>
            </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
    </div>

  );
};

export default Specials;
