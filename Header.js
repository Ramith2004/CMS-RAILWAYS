import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <button className="login-button" onClick={() => navigate("/login-page")}>
        Login
      </button>
    </header>
  );
};

export default Header;
