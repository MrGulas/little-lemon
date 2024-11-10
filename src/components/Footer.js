import React from 'react';
import RestaurantImg  from '../images/restaurant.png'

const Footer = () => {
    return (
        <footer>
        <img src={RestaurantImg} alt="Photo of restaurant's terrace"></img>
        <nav>
            <h3>Website Navigation</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservations</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
        <div className='footerContact'>
        <h3>Contacts</h3>
        <p>Address: Chicago</p>
        <p>Email: littlelemon@restaurant.com</p>
        <p>Phone Number:+1235654548</p>
        </div>
        <div className='footerSocialMedia'>
        <h3>Social Media Links</h3>
        <p><a href="#">Facebook</a></p>
        <p><a href="#">Instagram</a></p>
        <p><a href="#">Twitter</a></p>
        </div>
        </footer>
    );
};

export default Footer;