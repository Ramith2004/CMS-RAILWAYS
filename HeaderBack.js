import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HeaderBack.css';

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="logo">LOGO</div>
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
    </header>
  );
};

export default Header;
