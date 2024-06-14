import React from 'react';
import './HomePage.css';
import NavBar from './NavBar';
import Header from './Header';

const HomePage = () => {
  return (
    <div className="container">
      <Header />
      <div className="container2">
        <NavBar />
        <main className="main-content">
          <h1>WELCOME TO COMPLAIN MANAGEMENT SYSTEM</h1>
        </main>
      </div>
    </div>
  );
};

export default HomePage;
