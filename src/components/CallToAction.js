import React from 'react';
import ctaImage from '../images/cta_image.png'

const CallToAction = () => {
  return (
    <>
    <div className='background'></div>
    <div className='container'>
        <section className="call-to-action">
            <div className='cta_content'>
                <h2>Little Lemon</h2>
                <h3>Chicago</h3>
                <p>We are a family owned <br/> Mediterranean restaurant, <br/> focused on traditional <br/>recipes served with a modern <br/> twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img className="cta_image"src={ctaImage}></img>
        </section>
    </div>
    </>
  );
};

export default CallToAction;
