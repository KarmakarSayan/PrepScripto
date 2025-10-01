import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../pages/Doctors.css'; // This path assumes your CSS is in the pages folder

const DoctorCard = ({ doctor }) => {
  const navigate = useNavigate();

  // This function handles the click event for the entire card
  const handleNavigate = () => {
    // Safeguard: Only navigate if the doctor object and its _id exist
    if (doctor && doctor._id) {
      navigate(`/appointment/${doctor._id}`);
    } else {
      // Log an error to the console for debugging
      console.error("Navigation failed: The doctor object is missing an '_id' property.", doctor);
      // Inform the user that something went wrong
      alert("Sorry, there was an error opening this doctor's details.");
    }
  };

  return (
    // The onClick handler is attached to the main container div
    <div className='doctor-card' onClick={handleNavigate}>
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

