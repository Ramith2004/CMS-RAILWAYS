import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CheckStatus.css';
import Header2 from './HeaderBack';
import NavBar from './NavBar';

function CheckStatus() {
  const [statusBy, setStatusBy] = useState('complainID');
  const [statusInput, setStatusInput] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  const checkStatus = () => {
    const data = [
      { id: '1', status: 'Pending', description: 'Issue with login' },
      { id: '2', status: 'Resolved', description: 'Password reset' },
    ];

    const filteredResults = data.filter(item =>
      (statusBy === 'complainID' && item.id === statusInput) ||
      (statusBy === 'employeeNo' && item.id === statusInput)
    );

    setResults(filteredResults);
  };

  return (
    <div className="check-status">
      <Header2 />
      <div className="container2">
        <NavBar />
        <main>
          <div className="content-wrapper">
            <h1>Check Complaint Status</h1>
            <div className="status-check">
              <label htmlFor="statusBy">Check Status By</label>
              <select id="statusBy" value={statusBy} onChange={(e) => setStatusBy(e.target.value)}>
                <option value="complainID">Complain ID</option>
                <option value="employeeNo">Employee No.</option>
              </select>
              <input
                type="text"
                id="statusInput"
                value={statusInput}
                onChange={(e) => setStatusInput(e.target.value)}
                placeholder="Complain ID/ Employee No."
              />
              <button onClick={checkStatus}>Go</button>
            </div>
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Status</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {results.map(result => (
                  <tr key={result.id}>
                    <td>{result.id}</td>
                    <td>{result.status}</td>
                    <td>{result.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CheckStatus;
