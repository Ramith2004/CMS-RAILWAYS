import React from 'react';
import NavBar2 from './NavBar2'; // Import NavBar2 component
import Header from './Header3'; // Import Header component
import './AllComplain.css';

function AllComplain() {
  return (
    <div className="container">
      <Header /> {/* Use Header component */}
      <div className="container2">
        <NavBar2 />
        <div className="main-content">
          <div className="content">
            <div className="table-container">
              <div className="table-header">
                <span>ALL COMPLAINTS</span>
                <input type="text" placeholder="Search" className="search" />
              </div>
              <table className="complaints-table">
                <thead>
                  <tr>
                    <th>Complaint ID</th>
                    <th>Complaint DESC</th>
                    <th>DIVISION</th>
                    <th>DEPARTMENT</th>
                    <th>WEBSITE</th>
                    <th>MODULE</th>
                    <th>EMP ID</th>
                    <th>STATUS</th>
                    <th>DATE</th>
                  </tr>
                </thead>
                <tbody>
                  {['1','2','3'].map((id, index) => (
                    <tr key={index}>
                      <td>{id}</td>
                      <td>{}</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllComplain;
