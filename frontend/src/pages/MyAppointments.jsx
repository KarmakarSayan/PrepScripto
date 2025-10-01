import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './MyAppointments.css';

const MyAppointments = () => {
  // --- FIX: Read the live data and functions directly from the global context ---
  // No more local useState for the appointments list. This ensures the component
  // always displays the most up-to-date information.
  const { doctors, appointments, cancelAppointment, payForAppointment } = useContext(AppContext);

  // Handlers now call the global functions from the context
  const handleCancel = (appointmentId) => {
    if (window.confirm("Are you sure you want to cancel this appointment?")) {
      cancelAppointment(appointmentId);
      alert("Appointment cancelled successfully.");
    }
  };
  
  const handlePay = (appointmentId) => {
    alert(`Redirecting to payment for appointment ID: ${appointmentId}`);
    payForAppointment(appointmentId);
  };

  return (
    <div className="my-appointments-page">
      <h1 className="appointments-title">My Appointments</h1>
      
      <div className="appointments-list">
        {appointments.length > 0 ? (
          // This list now renders directly from the global 'appointments' state
          // and will automatically re-render whenever that state changes.
          appointments.map(appointment => {
            const doctor = doctors.find(d => d._id === appointment.docId);
            if (!doctor) return null;

            return (
              <div key={appointment.id} className="appointment-card">
                <div className="appointment-doctor-image">
                  <img src={doctor.image} alt={doctor.name} />
                </div>
                <div className="appointment-details">
                  <h2 className="doctor-name">{doctor.name}</h2>
                  <p className="doctor-speciality">{doctor.speciality}</p>
                  <p className="detail-item"><strong>Address:</strong> {doctor.address.line1}, {doctor.address.line2}</p>
                  <p className="detail-item">
                    <strong>Date & Time:</strong> {new Date(appointment.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })} | {new Date(appointment.date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
                <div className="appointment-actions">
                  {appointment.status === 'Needs Payment' && (
                    <button onClick={() => handlePay(appointment.id)} className="action-btn pay-btn">Pay Here</button>
                  )}
                  {appointment.status === 'Paid' && (
                    <button className="action-btn paid-btn" disabled>Paid</button>
                  )}
                  {/* The cancel button is available for all statuses except 'Paid' */}
                  {appointment.status !== 'Paid' && (
                    <button onClick={() => handleCancel(appointment.id)} className="action-btn cancel-btn">Cancel appointment</button>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <p className="no-appointments">You have no upcoming appointments.</p>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;

