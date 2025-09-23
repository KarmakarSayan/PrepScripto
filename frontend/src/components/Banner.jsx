import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom'; // ✅ Import useNavigate
import './Banner.css';

const Banner = () => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <div className='banner'>
      {/* Left Side */}
      <div className='banner-left'>
        <h1 className='banner-headline'>Book Appointment</h1>
        <p className='banner-subhead'>With 100+ Trusted Doctors</p>

        {/* CTA button */}
        <button 
          className='banner-cta-button' 
          onClick={() => {
            navigate('/login'); // Navigate to login page
            window.scrollTo(0, 0); // Scroll to top
          }}
        >
          Create account
        </button>
      </div>

      {/* Right Side */}
      <div className='banner-right'>
        <img 
          className='banner-image' 
          src={assets.appointment_img} 
          alt="Doctor pointing at text" 
        />
      </div>
    </div>
  );
};

export default Banner;
 