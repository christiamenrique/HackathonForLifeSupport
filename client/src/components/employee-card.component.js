import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import "../style/employee_card.scss";

const Employee = props => (
    
      <div className="grid-item">
    <div className="img-cont">
      <img alt="img" src="https://lifesports.org/wp-content/uploads/Coach-Rodney.jpg" />
      </div>
    <p>Name:{props.employee.name}</p>
    <p>Profession: {props.employee.profession}</p>
    {/* <p>Work Address: {props.employee.address}</p> */}
    <p>Phone Number: {props.employee.phoneNumber}</p>
    <p>Email: {props.employee.email}</p>
    </div>
)

export default class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {employees: []};
  }

  componentDidMount() {
    axios.get('/employees')
      .then(response => {
        this.setState(
          { employees: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  exerciseList() {
    return this.state.employees.map(currentemployee => {
      return <Employee employee={currentemployee} key={currentemployee.name}/>;
    })
  }

  render() {
    return (
        
      <div className="grid-container">
        { this.exerciseList() }
      </div>
        
    )
  }
}