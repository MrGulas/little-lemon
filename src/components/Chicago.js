import React from 'react';
import ChicagoFP from '../images/chicago_firstp.png';
import ChicagoSP from '../images/chicago_secondp.png';

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
      <img className="fp" src={ChicagoFP} alt="Mario cooking a dish"></img>
      <img className="sp" src={ChicagoSP} alt="Mario and Adrian are laughing together"></img>
    </section>
    </div>
  );
};

export default Chicago;
