import React, { useState } from 'react';
import { assets } from '../assets/assets'; // Or your asset path
import './MyProfile.css';

const MyProfile = () => {
  // State to toggle between viewing and editing mode
  const [isEditing, setIsEditing] = useState(false);

  // State to hold the user's profile data
  // In a real application, this would come from your context or an API call
  const [profileData, setProfileData] = useState({
    name: "Edward Vincent",
    email: "richardjameswapa@gmail.com",
    phone: "+1 123 456 7890",
    address: "57th Cross, Richmond Circle, Church Road, London",
    gender: "Male",
    birthday: "2024-07-20", // Use YYYY-MM-DD for date inputs
    profilePic: assets.profile_pic // Assuming a profile picture from assets
  });

  // Handler for input changes while in editing mode
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  // Handler for saving the information
  const handleSave = () => {
    setIsEditing(false);
    // In a real app, you would add logic here to save the updated profileData to your backend
    console.log("Saving data:", profileData);
    alert("Profile information saved!");
  };

  return (
    <div className="my-profile-page">
      <div className="profile-header">
        <div className="profile-picture-container">
          <img src={profileData.profilePic} alt="User Profile" className="profile-pic" />
          {/* Placeholder for a second image or icon */}
          <div className="profile-pic-placeholder"></div>
        </div>
        <h1 className="profile-name">{profileData.name}</h1>
      </div>

      <div className="profile-details">
        {/* --- Contact Information Section --- */}
        <div className="info-section">
          <h2 className="section-title">CONTACT INFORMATION</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Email id:</span>
              {isEditing ? (
                <input type="email" name="email" value={profileData.email} onChange={handleInputChange} className="info-input" />
              ) : (
                <span className="info-value email">{profileData.email}</span>
              )}
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              {isEditing ? (
                <input type="tel" name="phone" value={profileData.phone} onChange={handleInputChange} className="info-input" />
              ) : (
                <span className="info-value phone">{profileData.phone}</span>
              )}
            </div>
            <div className="info-item full-width">
              <span className="info-label">Address:</span>
              {isEditing ? (
                <input type="text" name="address" value={profileData.address} onChange={handleInputChange} className="info-input" />
              ) : (
                <span className="info-value">{profileData.address}</span>
              )}
            </div>
          </div>
        </div>

        {/* --- Basic Information Section --- */}
        <div className="info-section">
          <h2 className="section-title">BASIC INFORMATION</h2>
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Gender:</span>
              {isEditing ? (
                <select name="gender" value={profileData.gender} onChange={handleInputChange} className="info-input">
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              ) : (
                <span className="info-value">{profileData.gender}</span>
              )}
            </div>
            <div className="info-item">
              <span className="info-label">Birthday:</span>
              {isEditing ? (
                <input type="date" name="birthday" value={profileData.birthday} onChange={handleInputChange} className="info-input" />
              ) : (
                <span className="info-value">{new Date(profileData.birthday).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="profile-actions">
        {isEditing ? (
          <button onClick={handleSave} className="profile-btn save-btn">Save Information</button>
        ) : (
          <button onClick={() => setIsEditing(true)} className="profile-btn edit-btn">Edit</button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
