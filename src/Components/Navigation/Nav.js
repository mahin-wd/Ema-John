import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/UserContext';
import logo from '../../images/Logo.svg';
import './Nav.css'

const Nav = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='navigation'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Home</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/about">About Us</Link>

                {
                    user?.uid?
                    <Link onClick={logOut}>
                    Log Out
                    </Link>

                    :

                    <>
                    <Link to="/login">Log In</Link>
                    <Link to="/signup">Sign Up</Link>
                    </>
                }
            </div>
        </nav>
    );
};

export default Nav;