// , { Component } 
import React from 'react'; 
import { Link } from 'react-router-dom';

function Navbar(){ 
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">LifeSports</Link>
        <div className="collpase navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
          <Link to="/" className="nav-link">Exercises</Link>
          </li>
          <li className="navbar-item">
          <Link to="/create" className="nav-link">Post New Workout</Link>
          </li>
          {/* <li className="navbar-item">
          <Link to="/user" className="nav-link">Create User</Link>
          </li> */}
          <li className="navbar-item">
          <Link to="/student" className="nav-link">Create Student</Link>
          </li>
          <li className="navbar-item">
          <Link to="/view-student" className="nav-link">Student</Link>
          </li>
        </ul>
        </div>
      </nav>
    );  
}
export default Navbar