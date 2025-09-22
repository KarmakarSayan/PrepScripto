import React from 'react';
import './TopDoctors.css'; // Corrected CSS import path
import { doctors } from '../assets/assets'; // Make sure this path is correct

const TopDoctors = () => {
  // The 'return' statement must be inside a component function
  return (
    <div className='top-doctors-container'>
      <h1>Top Doctors to Book</h1>
      <p className='top-doctors-subtitle'>Simply browse through our extensive list of trusted doctors</p>

      <div className='doctor-list'>
        {doctors.slice(0, 10).map((item, index) => (
          <div key={index} className='doctor-card'>
            <img src={item.image} alt={item.name} className='doctor-image' />
            <div className='doctor-info'>
              <div className='doctor-status'>
                <div className='status-dot'></div>
                <p className='status-text'>Available</p>
              </div>
              <p className='doctor-name'>{item.name}</p>
              <p className='doctor-speciality'>{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopDoctors;