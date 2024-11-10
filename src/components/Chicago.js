import React from 'react';
import ChicagoImage from '../images/MarioAndAdrian.png';

const Chicago = () => {
  return (
    <div className='container'>
    <section className="chicago">
    <div className='content'>
    <h2>Little Lemon</h2>
      <h3>Chicago</h3>
      <p>Mario and Adrian grew up in a bustling, food-loving neighborhood, where cooking was an art and a ritual. They were cousins, but more like brothers, sharing a love for food passed down from their grandmother, whose kitchen was always filled with the aroma of fresh herbs, spices, and lemon zest.
      Today, Little Lemon is more than a restaurant—it's a gathering place filled with stories, laughter, and of course, the unmistakable zing of fresh lemon in nearly every dish.</p>
    </div>
      <img className="ChicagoImage" src={ChicagoImage} alt="Mario and Adrian in the kitchen"></img>
    </section>
    </div>
  );
};

export default Chicago;
