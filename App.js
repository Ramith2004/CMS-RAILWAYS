// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import RaiseComplaint from './RaiseComplaint';
import CheckStatus from './CheckStatus';
import Login from './LoginPage';
import Complain from './AllComplain';
import Profile from './Profile';
import ChangePassword from './ChangePassword';
import LogoutPage from './LogoutPage'; // Import LogoutPage

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/raise-complaint" element={<RaiseComplaint />} />
        <Route path="/check-complaint-status" element={<CheckStatus />} />
        <Route path="/login-page" element={<Login />} />
        <Route path="/all-complain" element={<Complain />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<ChangePassword />} />
        <Route path="/logout" element={<LogoutPage />} /> {/* Add route for LogoutPage */}
      </Routes>
    </Router>
  );
}

export default App;
