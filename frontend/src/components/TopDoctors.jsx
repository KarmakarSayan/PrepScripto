import React, { useContext } from 'react';
import './TopDoctors.css';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // Safeguard: If doctors data is not yet loaded, don't render anything
  if (!doctors || doctors.length === 0) {
    return null; 
  }

  return (
    <div className='top-doctors-container'>
      <h1>Top Doctors to Book</h1>
      <p className='top-doctors-subtitle'>Simply browse through our extensive list of trusted doctors</p>
      <div className='doctor-list'>
        {doctors.slice(0, 10).map((item) => (
          // --- FIX #1: Corrected the typo from "appoinment" to "appointment" ---
          // --- FIX #2: Changed key from index to the unique item._id ---
          <div onClick={() => navigate(`/appointment/${item._id}`)} key={item._id} className='doctor-card'>
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
      {/* --- FIX #3: Changed scrollTo to window.scrollTo --- */}
      <button onClick={() => { navigate('/doctors'); window.scrollTo(0, 0); }} className='but'>
        More
      </button>
    </div>
  );
};

export default TopDoctors;

