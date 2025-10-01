import React, { createContext, useState } from "react";
import { doctors, specialityData } from "../assets/assets";

// Initial mock data for appointments
const initialAppointments = [
  { id: 1, docId: 'doc1', date: '2025-07-25T20:30:00', status: 'Upcoming' },
  { id: 2, docId: 'doc7', date: '2025-07-26T18:00:00', status: 'Needs Payment' },
  { id: 3, docId: 'doc13', date: '2025-07-27T15:00:00', status: 'Paid' }
];

export const AppContext = createContext(null);

const AppContextProvider = (props) => {
  const [appointments, setAppointments] = useState(initialAppointments);

  // Function to add a new appointment
  const bookAppointment = (newAppointmentDetails) => {
    setAppointments(prevAppointments => {
      const newAppointment = {
        ...newAppointmentDetails,
        id: Date.now(),
        // --- THIS IS THE FIX ---
        // Change the default status from 'Upcoming' to 'Needs Payment'
        status: 'Needs Payment' 
      };
      return [...prevAppointments, newAppointment];
    });
  };

  // Function to cancel an appointment
  const cancelAppointment = (appointmentId) => {
    setAppointments(prev => prev.filter(app => app.id !== appointmentId));
  };

  // Function to handle payment
  const payForAppointment = (appointmentId) => {
    setAppointments(prev => prev.map(app => 
      app.id === appointmentId ? { ...app, status: 'Paid' } : app
    ));
  };

  const contextValue = {
    doctors,
    specialityData,
    appointments,
    bookAppointment,
    cancelAppointment,
    payForAppointment
  };

  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;

