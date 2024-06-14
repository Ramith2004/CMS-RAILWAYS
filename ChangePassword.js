import React, { useState } from 'react';
import NavBar2 from './NavBar2';
import Header from './Header3';
import './ChangePassword.css';

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add password change logic here
    console.log('Password changed successfully');
  };

  return (
    <div className="change-password-container">
      <Header />
      <div className="container2">
        <NavBar2 />
        <div className="change-password-content">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Current Password</label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>New Password</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label>Confirm New Password</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="submit-button">Change Password</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
