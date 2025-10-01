import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import Pages
import Home from './pages/Home.jsx';
import Doctors from './pages/Doctors.jsx';
import Login from './pages/Login.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import MyProfile from './pages/MyProfile.jsx';
import MyAppointments from './pages/MyAppointments.jsx';
import Appointments from './pages/Appointments.jsx';

// Import Components
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

// --- Main App Component ---
const App = () => {
  return (
    // This container helps with the sticky footer layout
    <div className="app-container">
      <Navbar/>
      <ScrollToTop /> {/* This component handles scrolling on navigation */}
      
      {/* The main content of your pages will be rendered here */}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/doctors/:speciality" element={<Doctors />} /> 
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/my-profile" element={<MyProfile />} />
          <Route path="/my-appointments" element={<MyAppointments />} />
          <Route path="/appointment/:docId" element={<Appointments />} />
        </Routes>
      </main>

      <Footer/>
    </div>
  );
};

export default App;