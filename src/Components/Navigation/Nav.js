import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg';
import './Nav.css'

const Nav = () => {
    return (
        <nav className='navigation'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About Us</Link>
                <Link to="/login">Login</Link>
            </div>
        </nav>
    );
};

export default Nav;