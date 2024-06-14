import React from "react";
import "./RaiseComplaint.css";
import Header2 from "./HeaderBack";
import NavBar from "./NavBar";

const RaiseComplaint = () => {
  return (
    <div className="container">
      <Header2 />
      <div className="container2">
        <NavBar />
        <main className="main-content">
          <h1>RAISE NEW COMPLAINT</h1>
          <form className="complaint-form">
            <div className="input-group">
              <label htmlFor="employeeNo">Enter Employee No.</label>
              <input type="text" id="employeeNo" name="employeeNo" />
            </div>
            <div className="input-group">
              <label htmlFor="employeeName">Enter Employee Name</label>
              <input type="text" id="employeeName" name="employeeName" />
            </div>
            <div className="dropdown-group">
              <div className="input-group">
                <label htmlFor="department">Department</label>
                <select id="department" name="department">
                  <option value="personnel">Personnel</option>
                  <option value="engg">ENGG</option>
                  <option value="optg">OPTG</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="website">Website</label>
                <select id="website" name="website">
                  <option value="e-office">e-Office</option>
                  <option value="sparrow">Sparrow</option>
                  <option value="east-coast-website">East Coast Website</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="module">Module</label>
                <select id="module" name="module">
                  <option value="payroll">Payroll</option>
                  <option value="bill-passing">Bill Passing</option>
                  <option value="pension">Pension</option>
                </select>
              </div>
              <div className="input-group">
                <label htmlFor="division">Division</label>
                <select id="division" name="division">
                  <option value="kur">KUR</option>
                  <option value="sbp">SBP</option>
                  <option value="wat">WAT</option>
                </select>
              </div>
            </div>
            <div className="input-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" />
            </div>
            <div className="input-group">
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <div className="input-group">
              <label htmlFor="reference">Reference</label>
              <button className="upload-button" type="button">
                Upload Reference Documents
              </button>
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </main>
      </div>
    </div>
  );
};

export default RaiseComplaint;
