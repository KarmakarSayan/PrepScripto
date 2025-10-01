import React from 'react';
import { assets } from '../assets/assets';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1 className="contact-title">CONTACT US</h1>

      <div className="contact-content">
        {/* Left Side: Image */}
        <div className="contact-image-container">
          <img src={assets.contact_image} alt="Doctor with patient" className="contact-image" />
        </div>

        {/* Right Side: Information */}
        <div className="contact-info-container">
          <div className="office-section">
            <h2>OUR OFFICE</h2>
            <p>54709 Willms Station</p>
            <p>Suite 350, Washington, USA</p>
            <br />
            <p><strong>Tel:</strong> (415) 555-0132</p>
            <p><strong>Email:</strong> greatstackdev@gmail.com</p>
          </div>

          <div className="careers-section">
            <h2>CAREERS AT PRESCRIPTO</h2>
            <p>Learn more about our teams and job openings.</p>
            <button className="explore-jobs-btn">Explore Jobs</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
