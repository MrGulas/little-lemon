import React from 'react';
import logo from '../images/Logo.svg'
import {Routes, Route, Link} from 'react-router-dom';


const Nav = () => {
    return (
                <nav className='topNavigation'>
            <img src={logo} alt=""></img>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><Link to="/booking">Reservation</Link></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;