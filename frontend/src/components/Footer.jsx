import React from 'react';
import { Link } from 'react-router-dom'; // For navigation
import { assets } from '../assets/assets'; // Or your asset path
import './Footer.css';                   // Import the CSS

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-content'>
        
        {/* About Section */}
        <div className='footer-section about'>
          <img src={assets.logo} alt="Prescripto Logo" className="logo-image" />
          <p>
            Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
        </div>

        {/* Company Links Section */}
        <div className='footer-section links'>
          <h2>Company</h2>
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About us</Link></li>
            <li><Link to='/contact'>Contact us</Link></li>
            <li><Link to='/privacy'>Privacy policy</Link></li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className='footer-section contact'>
          <h2>Get in Touch</h2>
          <p>+91-212-456-7890</p>
          <p>sayan@gmail.com</p>
        </div>

      </div>

      <hr className='footer-divider' />

      <div className='footer-copyright'>
        <p>Copyright  - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;