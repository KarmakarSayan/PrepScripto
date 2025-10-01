import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import DoctorCard from '../components/DoctorCard.jsx';
import './Appointments.css';

// Helper function to generate the next 7 days for the booking slots
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
  // --- FIX #1: Get the global bookAppointment function from context ---
  const { doctors, bookAppointment } = useContext(AppContext);

  // State to hold the specific doctor's info and related doctors
  const [doctorInfo, setDoctorInfo] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]);
  
  // This effect finds the correct doctor and filters for related ones
  useEffect(() => {
    if (doctors && doctors.length > 0) {
      const foundDoctor = doctors.find(doc => doc._id === docId);
      setDoctorInfo(foundDoctor);

      if (foundDoctor) {
        const related = doctors.filter(d => 
          d.speciality === foundDoctor.speciality && d._id !== foundDoctor._id
        ).slice(0, 4);
        setRelatedDoctors(related);
      }
    }
  }, [doctors, docId]);

  // State for the interactive booking UI
  const [selectedDateIndex, setSelectedDateIndex] = useState(0);
  const [selectedTime, setSelectedTime] = useState('9:00 am');

  // Data for the UI
  const dates = getNextSevenDays();
  const timeSlots = ['8:00 am', '8:30 am', '9:00 am', '9:30 am', '10:00 am', '10:30 am', '11:00 am', '11:30 am'];

  // --- FIX #2: Update the handler to call the global function ---
  const handleBookAppointment = () => {
    const selectedDateObject = dates[selectedDateIndex].fullDate;
    
    // Combine the selected date with the selected time
    const [time, period] = selectedTime.split(' ');
    let [hours, minutes] = time.split(':').map(Number);
    if (period.toLowerCase() === 'pm' && hours < 12) hours += 12;
    if (period.toLowerCase() === 'am' && hours === 12) hours = 0; // Midnight case
    
    selectedDateObject.setHours(hours, minutes, 0, 0);

    // Create the new appointment object
    const newAppointmentDetails = {
      docId: doctorInfo._id,
      date: selectedDateObject.toISOString(), // Store date in a standard format
    };

    // Call the global function from context to add the appointment
    bookAppointment(newAppointmentDetails);

    alert(`Appointment with ${doctorInfo.name} booked successfully!`);
    
    // Navigate the user to see their updated list of appointments
    navigate('/my-appointments');
  };

  // --- Render Safeguard ---
  if (!doctorInfo) {
    return <div style={{ textAlign: 'center', margin: '4rem', fontSize: '1.2rem' }}>Loading Doctor Details...</div>;
  }

  // --- Main Render (No changes needed below this line) ---
  return (
    <div className='appointments-page'>
      <div className='doctor-details-card'>
        <div className='doctor-image-container'>
          <img src={doctorInfo.image} alt={doctorInfo.name} className='doctor-image' />
        </div>
        <div className='doctor-info'>
          <div className='doctor-name-container'>
            <h1 className='doctor-name'>{doctorInfo.name}</h1>
            <svg className='verified-icon' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a.75.75 0 00-1.06-1.06L9 10.94l-1.72-1.72a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.06 0l3.75-3.75z" clipRule="evenodd" />
            </svg>
          </div>
          <p>
            <span className='doctor-speciality'>{doctorInfo.speciality}</span>
            <span className='doctor-experience'>{doctorInfo.experience || '2 Years'}</span>
          </p>
          <p className='doctor-about'>
            {doctorInfo.about || 'A dedicated professional with a strong commitment to delivering comprehensive medical care.'}
          </p>
          <p className='doctor-fee'>Appointment fee: <strong>${doctorInfo.fee || 50}</strong></p>
        </div>
      </div>

      <div className='booking-slots'>
        <h2>Booking slots</h2>
        <div className='date-slots'>
          {dates.map((date, index) => (
            <div
              key={index}
              className={`date-slot ${selectedDateIndex === index ? 'active' : ''}`}
              onClick={() => setSelectedDateIndex(index)}
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

      <div className='related-doctors'>
        <h2>Related Doctors</h2>
        <p className='related-doctors-subtitle'>Simply browse through our extensive list of trusted doctors.</p>
        <div className='related-doctors-grid'>
          {relatedDoctors.map(doc => (
            <DoctorCard key={doc._id} doctor={doc} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;

