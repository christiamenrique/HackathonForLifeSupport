import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import EmployeeNav from "../elements/employeenav";
export default class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: '',
      description: '',
      duration: 0,
      date: new Date(),
      students: []
    }
  }

  componentDidMount() {
    axios.get('/students/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            students: response.data.map(student => student.name),
            name: response.data[0].name
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })

  }

  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value
    })
  }

  onChangeDate(date) {
    this.setState({
      date: date
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const exercise = {
      name: this.state.name,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date
    }

    console.log(exercise);

    axios.post('/exercises/add', exercise)
      .then(res => console.log(res.data));

    window.location = '/exercise-list';
  }

  render() {
    return (
      <div>
        <EmployeeNav />
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <form className="form"  onSubmit={this.onSubmit}>
          <h3 className="employee">Create New Exercise Log</h3>
          <div className="form-group">
            <label><strong>Students name:</strong></label>
            <select
              type="text"
              required
              className="form-control"
              value={this.state.name}
              onChange={this.onChangeName}>
              {
                this.state.students.map(function (student) {
                  return <option
                    key={student}
                    value={student}>{student}
                  </option>;
                })
              }
            </select>
          </div>
          <div className="form-group">
            <label><strong>Description:</strong></label>
            <input type="text"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="form-group">
            <label><strong>Duration (in minutes): </strong></label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>
          <div className="form-group">
            <label><strong>Date: </strong></label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>

          <div className="form-group">
            <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
          </div>
        </form>
        <br></br>
        <br></br>
        <br></br>
      </div>
    )
  }
}