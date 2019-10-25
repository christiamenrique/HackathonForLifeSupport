import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import axios from 'axios';
import "../style/employee_card.scss";
import EmployeeNav from "../elements/employeenav"



const Employee = props => (

    <div className="grid-items">
        <div className="img-cont">
            <img alt="img" src={props.employee.image} height="200px" width="200px" />
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
        this.state = { employees: [] };
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
            return <Employee employee={currentemployee} key={currentemployee.name} />;
        })
    }

    render() {
        return (
            <div><EmployeeNav />
                <br></br>
                <div className="searchBar">  
                    <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
                    <div className="main-grid">

                        {this.exerciseList()}
                    </div>


            </div>
        )
    }
}