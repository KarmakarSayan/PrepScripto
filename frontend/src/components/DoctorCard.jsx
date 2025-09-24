// src/components/DoctorCard.jsx

import React from 'react';

const DoctorCard = ({ doctor }) => {
  return (
    <div className='doctor-card'>
      <img src={doctor.image} alt={`Dr. ${doctor.name}`} className='doctor-card-image' />
      <div className='doctor-card-info'>
        <p className='doctor-card-status'>Available</p>
        <h3 className='doctor-card-name'>Dr. {doctor.name}</h3>
        <p className='doctor-card-speciality'>{doctor.speciality}</p>
      </div>
    </div>
  );
};
export default DoctorCard;