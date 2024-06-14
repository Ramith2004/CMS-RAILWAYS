import React from 'react';
import './LogoutPage.css';

const LogoutPage = () => {
  const handleConfirmLogout = () => {
    localStorage.setItem('loggedOut', 'true');
    window.opener.postMessage('loggedOut', '*');
    window.close();
  };

  return (
    <div className="logout-modal">
      <p>You have been logged out</p>
      <button className="ok-button" onClick={handleConfirmLogout}>OK</button>
    </div>
  );
};

export default LogoutPage;
