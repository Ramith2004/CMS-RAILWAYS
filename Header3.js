import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleLogoutMessage = (event) => {
      if (event.data === 'loggedOut') {
        localStorage.removeItem('loggedOut');
        navigate('/');
      }
    };

    window.addEventListener('message', handleLogoutMessage);

    return () => {
      window.removeEventListener('message', handleLogoutMessage);
    };
  }, [navigate]);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    window.open('/logout', 'Logout', 'scrollbars=no,resizable=no,width=400,height=200,left=550,top=350');
  };

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToChangePassword = () => {
    navigate('/change-password');
  };

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <div className="dropdown">
        <button className="login-button" onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faUser} className="user-icon" /> Welcome, Admin
        </button>
        {dropdownOpen && (
          <div className="dropdown-menu">
            <button className="dropdown-item" onClick={goToProfile}>Profile</button>
            <button className="dropdown-item" onClick={goToChangePassword}>Change Password</button>
            <button className="dropdown-item" onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
