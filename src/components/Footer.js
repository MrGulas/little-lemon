import React from 'react';

const Footer = () => {
    return (
        <footer>
        <nav>
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
        <p>Address:</p>
        <p>Email:</p>
        <p>Phone Number:</p>
        </div>
        <div className='footerSocialMedia'>
        <h3>Social Media</h3>
        <p>Address:</p>
        <p>Email:</p>
        <p>Phone Number:</p>
        </div>
        </footer>
    );
};

export default Footer;