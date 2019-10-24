import React from "react";
// import nav from "react-bootstrap";
// import moonIcon from "/";

export default function EmployeeNav() {
  return (
    <nav class="navbar navbar-expand-lg fixed-top">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navigation-bar"
      >
        <span class="navbar-toggler-icon">&#9776;</span>
      </button>

      <a class="navbar-brand" href="/">
        <img
          className="taco"
          src="https://image.flaticon.com/icons/png/128/2128/2128322.png"
          alt="Logo"
        />
      </a>

      <div class="collapse navbar-collapse" id="navigation-bar">
        <ul class="navbar-nav ml-auto">

          <li class="nav-item">
            <a class="nav-link" href="/view-student">
              STUDENTS
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/view-employee">
              EMPLOYEE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/exercise-list">
              EXERCISE
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/calender">
              CALENDER
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/chat">
              CHAT
            </a>
          </li>
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              ADMIN TOOLS
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="/student">
                Create Student
              </a>
              <a class="dropdown-item" href="/employee">
                Create Employee
              </a>
              <a class="dropdown-item" href="/create">
                Create Exercise
              </a>
            
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
