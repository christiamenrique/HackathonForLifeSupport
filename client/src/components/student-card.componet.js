// assigning exe
import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';

const Student = props => (
  <tr>
    <td>{props.student.name}</td>
    <td>{props.student.teamName}</td>
    <td>{props.student.description}</td>
    <td>{props.student.win}</td>
    <td>{props.student.loss}</td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);
    this.state = {students: []};
  }

  componentDidMount() {
    axios.get('/students')
      .then(response => {
        this.setState(
          { students: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  exerciseList() {
    return this.state.students.map(currentstudent => {
      return <Student student={currentstudent} key={currentstudent.name}/>;
    })
  }

  render() {
    return (
        <React.Fragment>
        <h3>Logged Exercises</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Team Name</th>
              <th>Description</th>
              <th>Win</th>
              <th>Loss</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        </React.Fragment>
    )
  }
}
// get students info from db
// get exercises and relate to student 
// list exercises 








