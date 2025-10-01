import React, { useContext, useState, useEffect, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../context/AppContext.jsx';
import DoctorCard from '../components/DoctorCard.jsx';
import './Doctors.css';

const Doctors = () => {
  const { speciality: urlSpeciality } = useParams();
  const { doctors } = useContext(AppContext);

  // Safeguard against missing data
  if (!doctors || doctors.length === 0) {
    return <div style={{ textAlign: 'center', margin: '4rem' }}>Loading doctors...</div>;
  }

  const [activeFilter, setActiveFilter] = useState(urlSpeciality || 'All');

  // Effect to update the filter if the URL parameter changes
  useEffect(() => {
    setActiveFilter(urlSpeciality || 'All');
  }, [urlSpeciality]);

  // Create a unique list of all specialities from the doctors data
  const allSpecialities = useMemo(() => {
    const specialities = doctors.map(doc => doc.speciality);
    return ['All', ...new Set(specialities)];
  }, [doctors]);

  // Filter the doctors based on the active filter
  const filteredDoctors = useMemo(() => {
    if (activeFilter === 'All') {
      return doctors;
    }
    return doctors.filter(doctor => doctor.speciality === activeFilter);
  }, [doctors, activeFilter]);

  return (
    <div className='doctors-page'>
      <h1 className='doctors-page-title'>Browse through the doctors specialist</h1>
      <div className='doctors-content'>
        <div className='speciality-filter'>
          <ul>
            {allSpecialities.map((speciality) => (
              <li
                key={speciality}
                className={activeFilter === speciality ? 'active' : ''}
                onClick={() => setActiveFilter(speciality)}
              >
                {speciality}
              </li>
            ))}
          </ul>
        </div>
        <div className='doctors-grid'>
          {filteredDoctors.map(doctor => (
            <DoctorCard key={doctor._id} doctor={doctor} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Doctors;

