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
import Home from "./components/home.component"
import Login from "./components/login.component";
import Calender from "./components/calender.component";
import Footer from "./elements/footer";
import Chat from "./components/chat.component";

function App() {
  return (
    <Router>
      <div className="container">
        {/* <Navbar /> */}
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        {/* <Route path="/user" component={CreateUser} /> */}
        <Route path="/student" component={CreateStudent} />
        <Route path="./view-student" component={StudentsList} />
        <Route path="/employee" component={CreateEmployee} />
        <Route path="/view-employee" component={EmployeesList} />
        {/* <Route path="/horizontal_bar" render={() => <HorizontalBar />} /> */}

        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/calender" component={Calender} />
        <Route path="/chat" component={Chat} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
