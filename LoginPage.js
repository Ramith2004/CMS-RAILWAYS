import React from 'react';
import './LoginPage.css';
import Header2 from './HeaderBack';
import NavBar from './NavBar';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const navigateToAllComplain = () => {
    navigate('/all-complain');
  };

  return (
    <div className="login-container">
      <Header2 />
      <div className="container2">
        <NavBar />
        <main className="login-main">
          <form className="login-form">
            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" name="username" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" />
            </div>
            <button type="button" className="login-button-lp" onClick={navigateToAllComplain}>Login</button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default LoginPage;
