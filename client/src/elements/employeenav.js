import React from "react";
// import nav from "react-bootstrap";
// import moonIcon from "/";

export default function EmployeeNav() {
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
          className="taco"
          src="https://image.flaticon.com/icons/png/128/2128/2128322.png"
          alt="Logo"
        />
      </a>

      <div className="collapse navbar-collapse" id="navigation-bar">
        <ul className="navbar-nav ml-auto">

          <li className="nav-item">
            <a className="nav-link" href="/view-student">
              STUDENTS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/view-employee">
              EMPLOYEE
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
              CHAT
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ADMIN TOOLS
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a className="dropdown-item" href="/student">
                Create Student
              </a>
              <a className="dropdown-item" href="/employee">
                Create Employee
              </a>
              <a className="dropdown-item" href="/create">
                Create Exercise
              </a>
            
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
