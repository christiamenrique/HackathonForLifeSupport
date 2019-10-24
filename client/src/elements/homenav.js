
import React from 'react';


export default function HomeNav() {
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
      <a class="navbar-brand" href="/index">
        <img
          className="taco"
          src="https://image.flaticon.com/icons/png/128/2128/2128322.png"
          alt="Logo"
        />
      </a>

      <div class="collapse navbar-collapse" id="navigation-bar">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/">
              HOME
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/login">
              LOGIN
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

