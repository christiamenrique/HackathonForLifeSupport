import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
// import CreateUser from "./components/create-user.component";
import CreateStudent from "./components/create-students.component";
import StudentsList from "./components/student-card.componet";
import CreateEmployee from "./components/create-employee.component";
import EmployeesList from './components/employee-card.component';

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={ExercisesList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      {/* <Route path="/user" component={CreateUser} /> */}
      <Route path="/student" component={CreateStudent}/>
      <Route path="/view-student" component={StudentsList}/>
      <Route path="/employee" component={CreateEmployee}/>
      <Route path="/view-employee" component={EmployeesList}/>
      </div>
    </Router>
  );
}

export default App;
