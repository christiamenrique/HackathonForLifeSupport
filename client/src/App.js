import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar.component";
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";
import CreateStudent from "./components/create-students.component";
import StudentsList from "./components/student-card.componet";
import CreateEmployee from "./components/create-employee.component";
import EmployeesList from "./components/employee-card.component";
// import HorizontalBar from "./components/horizontal-bar.component";

//Lenny Add-on's
import Home from "./components/home.component";
import Login from "./components/login.component";
import Calender from "./components/calender.component";
import Footer from "./elements/footer";
import Chat from "./components/chat.component";
import "./style/wave.css";

function App() {
  return (
    <Router>

      <div>
        <div className="header">
          <div className="">
            {/* <Navbar /> */}
            <Route path="/" exact component={Home} />
            <Route path="/exercise-list" exact component={ExercisesList} />

            <Route path="/edit/:id" component={EditExercise} />
            <Route path="/create" component={CreateExercise} />
            {/* <Route path="/user" component={CreateUser} /> */}
            <Route path="/student" component={CreateStudent} />
            <Route path="/view-student" component={StudentsList} />
            <Route path="/employee" component={CreateEmployee} />
            <Route path="/view-employee" component={EmployeesList} />
            {/* <Route path="/horizontal_bar" render={() => <HorizontalBar />} /> */}

            <Route path="/login" component={Login} />
            <Route path="/calender" component={Calender} />
            <Route path="/chat" component={Chat} />
          </div>

          <svg
            className="waves"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shape-rendering="auto"
          >
            <defs>
              <path
                id="gentle-wave"
                d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g className="parallax">
              <use
                href="#gentle-wave"
                x="48"
                y="0"
                fill="rgba(255,255,255,0.7"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="3"
                fill="rgba(255,255,255,0.5)"
              />
              <use
                href="#gentle-wave"
                x="48"
                y="5"
                fill="rgba(255,255,255,0.3)"
              />
              <use href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <div className="content flex">
          <p>
            {" "}
            <Footer />
          </p>
        </div>
      </div>
    </Router>
  );
}

export default App;
