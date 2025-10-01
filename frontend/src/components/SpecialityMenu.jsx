import React from 'react';
import { specialityData } from '../assets/assets.js';
import { Link } from 'react-router-dom';
import './SpecilityMenu.css';

const SpecialityMenu = () => {
  return (
    <div id='speciality' >
      <h1>Find by Speciality</h1>
      <p>Simply browse through our extensive list of trusted doctors, find the right one for you, and schedule your appointment hassle-free.</p>
      
      <div className='speciality-list'>
        {specialityData.map((item) => {
          return (
            // The key is now a unique ID from the data (item._id) instead of the index.
            // This provides a stable identity for each item in the list.
            <Link key={item._id} to={`/doctors/${item.speciality}`} className='speciality-item'>
              <img src={item.image} alt={item.speciality} />
              <p>{item.speciality}</p>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default SpecialityMenu;

