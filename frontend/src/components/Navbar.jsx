import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { assets } from '../assets/assets'; // Make sure this path is correct
import './navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)
    return (
        <div className='nav'>
            {/* Add the img tag back here */}
            <img src={assets.logo} alt="Prescripto Logo" className="logo-image" />

            <ul>
                <li><NavLink to="/">HOME</NavLink></li>
                <li><NavLink to="/doctors">ALL DOCTORS</NavLink></li>
                <li><NavLink to="/about">ABOUT</NavLink></li>
                <li><NavLink to="/contact">CONTACT</NavLink></li>

            </ul>

            <div className="button">
                {token ? (
                    <div className="prf-sec">
                        <img style={{ width: '40px', height: '40', borderRadius: "50%", cursor: 'pointer' }}
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
                                <p  onClick={()=>navigate("my-profile")} style={{cursor:"pointer"}}>My Profile</p>
                                <p  onClick={()=>navigate("my-appointments")} style={{cursor:"pointer"}} >My Appointments</p>
                                <p  onClick={()=>setToken(false)} style={{cursor:"pointer"}}>Logout</p>
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