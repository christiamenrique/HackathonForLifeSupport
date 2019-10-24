import React, { Component } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
import "../style/student_card.scss";

const Student = props => (


  
  <div className="grid-item">
    <div className="img-cont">
      <img
        alt="img"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq_CuqQpYzDRQXJ_-4NoVbedjKioYl-7CTvYzeSDIkGRGVObVfKw&s"
      />
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
    return <div className="grid-container">{this.exerciseList()}</div>;
  }
}

// assigning exe
// get students info from db
// get exercises and relate to student
// list exercises
