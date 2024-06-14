import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar2 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleAllComplain = () => {
    navigate("/all-complain");
  };

  const handleOutbox = () => {
    navigate("/");
  };

  const handleAdduser = () => {
    navigate("/");
  };

  const handleActiveOrDeactive = () => {
    navigate("/");
  };

  const handleReport = () => {
    navigate("/");
  };

  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li>
            <button
              className={`button nav-button ${location.pathname === "/all-complain" ? "active" : ""}`}
              onClick={handleAllComplain}
            >
              Inbox
            </button>
          </li>
          <li>
            <button
              className={`button nav-button ${location.pathname === "/" ? "active" : ""}`}
              onClick={handleOutbox}
            >
              Sent
            </button>
          </li>
          <li>
            <button
              className={`button nav-button ${location.pathname === "/" ? "active" : ""}`}
              onClick={handleAdduser}
            >
              Add User
            </button>
          </li>
          <li>
            <button
              className={`button nav-button ${location.pathname === "/" ? "active" : ""}`}
              onClick={handleActiveOrDeactive}
            >
              Active/Deactivate User
            </button>
          </li>
          <li>
            <button
              className={`button nav-button ${location.pathname === "/" ? "active" : ""}`}
              onClick={handleReport}
            >
              Report
            </button>
          </li>
          
        </ul>
      </nav>
    </aside>
  );
};

export default NavBar2;
