import React, { useState, useContext, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import DoctorCard from '../components/DoctorCard.jsx'; // Make sure you have this reusable component
import './Appointments.css';

// Helper to get the next 7 days for the date slots
const getNextSevenDays = () => {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const result = [];
  for (let i = 0; i < 7; i++) {
    const date = new Date();
    date.setDate(date.getDate() + i);
    result.push({
      day: days[date.getDay()],
      number: date.getDate(),
      fullDate: date,
    });
  }
  return result;
};

// --- Main Appointments Component ---
const Appointments = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  // --- State Management ---
  const [selectedDate, setSelectedDate] = useState(0); // Index of the selected day
  const [selectedTime, setSelectedTime] = useState('9:00 am'); // Default selected time

  // --- Data Fetching and Filtering ---
  const doctor = useMemo(() => doctors.find(doc => doc.id === docId), [doctors, docId]);
  
  const relatedDoctors = useMemo(() => {
    if (!doctor) return [];
    return doctors.filter(d => d.speciality === doctor.speciality && d.id !== doctor.id).slice(0, 4);
  }, [doctors, doctor]);

  // --- UI Data ---
  const dates = getNextSevenDays();
  const timeSlots = ['8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am'];

  // --- Event Handlers ---
  const handleBookAppointment = () => {
    if (!selectedDate || !selectedTime) {
      alert('Please select a date and time.');
      return;
    }
    alert(`Appointment booked with ${doctor.name} on ${dates[selectedDate].fullDate.toDateString()} at ${selectedTime}.`);
    // Here you would typically send data to a backend and navigate to a confirmation page
    navigate('/');
  };
  
  // --- Render Safeguard ---
  if (!doctor) {
    return <div style={{ textAlign: 'center', margin: '4rem' }}>Doctor not found...</div>;
  }

  return (
    <div className='appointments-page'>
      {/* Doctor Details Section */}
      <div className='doctor-details-card'>
        <div className='doctor-image-container'>
          <img src={doctor.image} alt={doctor.name} className='doctor-image' />
        </div>
        <div className='doctor-info'>
          <div className='doctor-name-container'>
            <h1 className='doctor-name'>{doctor.name}</h1>
            <svg className='verified-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l3.75-3.75z" clipRule="evenodd" />
            </svg>
          </div>
          <p>
            <span className='doctor-speciality'>{doctor.speciality}</span>
            <span className='doctor-experience'>{doctor.experience || '2 Years'}</span>
          </p>
          <p className='doctor-about'>
            {doctor.about || 'Dr. Davis has a strong commitment to delivering comprehensive medical care, focusing on preventive medicine, early diagnosis, and effective treatment strategies.'}
          </p>
          <p className='doctor-fee'>Appointment fee: <strong>${doctor.fee || 50}</strong></p>
        </div>
      </div>

      {/* Booking Slots Section */}
      <div className='booking-slots'>
        <h2>Booking slots</h2>
        <div className='date-slots'>
          {dates.map((date, index) => (
            <div 
              key={index} 
              className={`date-slot ${selectedDate === index ? 'active' : ''}`}
              onClick={() => setSelectedDate(index)}
            >
              <p className='date-day'>{date.day}</p>
              <p className='date-number'>{date.number}</p>
            </div>
          ))}
        </div>
        <div className='time-slots'>
          {timeSlots.map(time => (
            <div 
              key={time} 
              className={`time-slot ${selectedTime === time ? 'active' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </div>
          ))}
        </div>
        <button onClick={handleBookAppointment} className='book-appointment-btn'>Book an appointment</button>
      </div>

      {/* Related Doctors Section */}
      <div className='related-doctors'>
        <h2>Related Doctors</h2>
        <p className='related-doctors-subtitle'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='related-doctors-grid'>
          {relatedDoctors.map(doc => (
            <DoctorCard key={doc.id} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
