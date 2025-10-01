import React from 'react';
import { assets } from '../assets/assets';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <h1 className="about-title">ABOUT US</h1>

      {/* --- Introduction Section --- */}
      <section className="about-intro">
        <div className="intro-image-container">
          <img src={assets.about_image} alt="Team of doctors" className="intro-image" />
        </div>
        <div className="intro-text-container">
          <p>
            Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.
          </p>
          <h2 className="vision-title">Our Vision</h2>
          <p>
            Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
          </p>
        </div>
      </section>

      {/* --- "Why Choose Us" Section --- */}
      <section className="why-choose-us">
        <h2 className="section-title">WHY CHOOSE US</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>EFFICIENCY:</h3>
            <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className="feature-card">
            <h3>CONVENIENCE:</h3>
            <p>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className="feature-card">
            <h3>PERSONALIZATION:</h3>
            <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
