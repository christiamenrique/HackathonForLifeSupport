import React from "react";
// import nav from "react-bootstrap";
// import moonIcon from "/";

export default function StudentNav() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation-bar"
      >
        <span className="navbar-toggler-icon">&#9776;</span>
      </button>

      <a className="navbar-brand" href="/">
        <img
          classNameName="taco"
          src="https://image.flaticon.com/icons/png/128/2128/2128322.png"
          alt="Logo"
        />
      </a>

      <div className="collapse navbar-collapse" id="navigation-bar">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="/">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view-student">
              STATS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/exercise-list">
              EXERCISE
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/calender">
              CALENDER
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/chat">
              CHART
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
