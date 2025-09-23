import React, { useContext } from 'react';
import './TopDoctors.css'; 
// import { doctors } from '../assets/assets'; 

import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';

const TopDoctors = () => {

  const navigate=useNavigate()
  const {doctors}=useContext(AppContext)
  return (
    <div className='top-doctors-container'>
      <h1>Top Doctors to Book</h1>
      <p className='top-doctors-subtitle'>Simply browse through our extensive list of trusted doctors</p>
      <div className='doctor-list'>
        {doctors.slice(0, 10).map((item, index) => (
          <div onClick={()=>navigate(`/appoinment/${item._id }`)} key={index} className='doctor-card'>
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
      <button  onClick={()=>{navigate('/doctors'); scrollTo(0,0)}} className=' but'>more</button>
      {/* here i am using onlclcik to navogate to the doctors page and  when clicked and  also to scroll the page t the top  */}
    </div>
  );
};

export default TopDoctors;