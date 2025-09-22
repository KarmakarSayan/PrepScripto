import React from 'react'
import { assets } from '../assets/assets'
import './Header.css'

const Header = () => {
  return (
    <div className="header-container">
  <div className='left1'>
    <p className='p1'>Book Appointment  <br />With Trusted Doctors</p>
        <div>
        <img src={assets.group_profiles} alt="" />
        <p>Simply browse through our extensive list of doctors, <br />Schedule your appointment hassle-free</p>
        </div>
    <a href="" id='#speciality'>
      Book Appointment <img src={assets.arrow_icon} alt="" />
    </a>
  </div>

  <div className='drimg'>
    <img className='Dr' src={assets.header_img} alt="" />
  </div>
</div>

  )
}

export default Header