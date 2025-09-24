import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; 
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='nav'>
            {/* Logo */}
            <img  onClick={()=>navigate('/')} src={assets.logo} alt="Prescripto Logo" className="logo-image" />

            {/* Hamburger for mobile */}
            <div className="hamburger" onClick={() => setShowMenu(!showMenu)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>

            {/* Navigation Links */}
            <ul className={`nav-links ${showMenu ? "active" : ""}`}>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/doctors">ALL DOCTORS</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>
            </ul>

            {/* Profile / Button */}
            <div className="button">
                {token ? (
                    <div className="prf-sec">
                        <img style={{ width: '40px', height: '40px', borderRadius: "50%", cursor: 'pointer' }}
                            src={assets.profile_pic}
                            alt="Profile"
                            className="profile-pic"
                        />
                        <img style={{ width: '12px', cursor: 'pointer' }}
                            src={assets.dropdown_icon}
                            alt="Dropdown Icon"
                            className="dropdown-icon"
                        />
                        <div className="dropdown">
                            <div className="drop">
                                <p onClick={() => navigate("my-profile")} style={{ cursor: "pointer" }}>My Profile</p>
                                <p onClick={() => navigate("my-appointments")} style={{ cursor: "pointer" }}>My Appointments</p>
                                <p onClick={() => setToken(false)} style={{ cursor: "pointer" }}>Logout</p>
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
