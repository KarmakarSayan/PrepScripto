import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; 
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    // This token state should ideally come from a global context later
    const [token, setToken] = useState(true);

    // --- THIS IS THE FIX ---
    // This function will be called when a nav link is clicked.
    // It closes the mobile menu.
    const handleLinkClick = () => {
        setShowMenu(false);
    };

    return (
        <div className='nav'>
            {/* Logo */}
            <img onClick={() => navigate('/')} src={assets.logo} alt="Prescripto Logo" className="logo-image" />

            {/* Hamburger for mobile */}
            <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${showMenu ? "active" : ""}`}>
                {/* Add the onClick handler to each NavLink */}
                <li><NavLink to="/" onClick={handleLinkClick}>HOME</NavLink></li>
                <li><NavLink to="/doctors" onClick={handleLinkClick}>ALL DOCTORS</NavLink></li>
                <li><NavLink to="/about" onClick={handleLinkClick}>ABOUT</NavLink></li>
                <li><NavLink to="/contact" onClick={handleLinkClick}>CONTACT</NavLink></li>
            </ul>

            {/* Profile / Button */}
            <div className="button">
                {token ? (
                    <div className="prf-sec">
                        <img 
                            style={{ width: '40px', height: '40px', borderRadius: "50%", cursor: 'pointer' }}
                            src={assets.profile_pic}
                            alt="Profile"
                            className="profile-pic"
                        />
                        <img 
                            style={{ width: '12px', cursor: 'pointer' }}
                            src={assets.dropdown_icon}
                            alt="Dropdown Icon"
                            className="dropdown-icon"
                        />
                        <div className="dropdown">
                            <div className="drop">
                                <p onClick={() => { navigate("my-profile"); handleLinkClick(); }} style={{ cursor: "pointer" }}>My Profile</p>
                                <p onClick={() => { navigate("my-appointments"); handleLinkClick(); }} style={{ cursor: "pointer" }}>My Appointments</p>
                                <p onClick={() => { setToken(false); handleLinkClick(); }} style={{ cursor: "pointer" }}>Logout</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <button onClick={() => navigate('/login')}>Create Account</button>
                )}
            </div>
        </div>
    );
};

export default Navbar;
