import React from 'react'
import { specialityData } from '../assets/assets.js'
import { Link } from 'react-router-dom' // Fix #1: Import the Link component
import './SpecilityMenu.css'
const SpecialityMenu = () => {
  return (
    <div id='speciality' >
      <h1>Find Speciality</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo consequatur harum sapiente, quas, laboriosam quae sequi voluptatum nisi nam praesentium dicta, nihil voluptates. Omnis provident eum dolores voluptate vero. Illo.</p>
      
      {/* This is the container for your speciality items */}
      <div className='speciality-list'>
        {specialityData.map((item, index) => {
          // Fix #2: You MUST return the JSX from the map function
          return (
            <Link onClick={() =>scrollTo(0,0)} key={index} to={`/doctors/${item.speciality}`} className='speciality-item'>
              <img src={item.image} alt={item.speciality} />
              <p>{item.speciality}</p>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default SpecialityMenu