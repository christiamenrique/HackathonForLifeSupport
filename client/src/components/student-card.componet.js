import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import "../style/student_card.scss";
import EmployeeNav from "../elements/employeenav"

const Student = props => (

  <div className="grid-item">
    <div className="img-cont">
      <img alt="img" src={props.student.image} height="200px" width="200px"/>
    </div>
    <p>Name: {props.student.name}</p>
    <p>Team Name: {props.student.teamName}</p>
    <p>Description: {props.student.description}</p>
    <p>Win: {props.student.win}</p>
    <p>Loss: {props.student.loss}</p>
  </div>
);

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = { students: [] };
  }

  componentDidMount() {
    axios
      .get("/students")
      .then(response => {
        this.setState({ students: response.data });
      })
      .catch(error => {
        console.log(error);
      });
  }

  exerciseList() {
    return this.state.students.map(currentstudent => {
      return <Student student={currentstudent} key={currentstudent.name} />;
    });
  }

  render() {
  
    return <div>
 
    <EmployeeNav/>
    <br></br>
    <div className="searchBar">
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>

    </div>
    <div className="grid-container">{this.exerciseList()}</div>
    </div>
    ;
  }
}


// assigning exe
// get students info from db
// get exercises and relate to student
// list exercises
