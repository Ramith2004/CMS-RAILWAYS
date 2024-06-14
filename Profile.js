import React from 'react';
import NavBar2 from './NavBar2';
import Header from './Header3';
import './Profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <Header />
      <div className="container2">
        <NavBar2 />
        <div className="profile-content">
          <h2>User Profile</h2>
          <div className="profile-details">
            <div className="profile-item">
              <label>Name:</label>
              <span>John Doe</span>
            </div>
            <div className="profile-item">
              <label>Email:</label>
              <span>john.doe@example.com</span>
            </div>
            <div className="profile-item">
              <label>Phone:</label>
              <span>(123) 456-7890</span>
            </div>
            <div className="profile-item">
              <label>Address:</label>
              <span>123 Main St, Anytown, USA</span>
            </div>
            <div className="profile-item">
              <label>Member Since:</label>
              <span>January 1, 2020</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
