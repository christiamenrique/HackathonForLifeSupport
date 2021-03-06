import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import "../App.css";
import EmployeeNav from "../elements/employeenav";

const Exercise = props => (
  <tr>
    <td>{props.exercise.name}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link className="editDelete"to={"/edit/"+props.exercise._id}>edit</Link> | <a className="editDelete" href="/" onClick={() => { props.deleteExercise(props.exercise._id) }}>delete</a>
    </td>
  </tr>
)

export default class ExercisesList extends Component {
  constructor(props) {
    super(props);

    this.deleteExercise = this.deleteExercise.bind(this)

    this.state = {exercises: []};
  }

  componentDidMount() {
    axios.get('/exercises/')
      .then(response => {
        this.setState(
          { exercises: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteExercise(id) {
    axios.delete('/exercises/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList() {
    return this.state.exercises.map(currentexercise => {
      return <Exercise exercise={currentexercise} deleteExercise={this.deleteExercise} key={currentexercise._id}/>;
    })
  }

  render() {
    return (

      <div>
        <EmployeeNav />
      
       
        
        <h3 className="log">Logged Exercises</h3>
        <table className="table excer">
          <thead className="thead-light">
            <tr>
              <th>Student name</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.exerciseList() }
          </tbody>
        </table>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
     </div>
    )
  }
}