import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../style/create-employee.css";
export default class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeProfession = this.onChangeProfession.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeEmailAddress = this.onChangeEmailAddress.bind(this);
        this.onChangeEmployeeCreated = this.onChangeEmployeeCreated.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.state = {
            name: '',
            profession: '',
            address: '',
            phoneNumber: '',
            email: '',
            employeeCreated: new Date()
        }
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeProfession(e) {
        this.setState({
            profession: e.target.value
        })
    }
    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    onChangeEmployeeCreated(date) {
        this.setState({
            employeeCreated: date
        })
    }

    onChangePhoneNumber(e) {
        this.setState({
            phoneNumber: e.target.value
        })
    }
    onChangeEmailAddress(e) {
        this.setState({
            email: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const employees = {
            name: this.state.name,
            profession: this.state.profession,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            email: this.state.email,
            employeeCreated: this.state.employeeCreated
        }
        console.log(employees);
        axios.post('/employees/add', employees)
            .then(res => console.log(res.data));
        // window.location = '/view-employee';
    }
    render() {
        return (
            <React.Fragment>
                {/* <h3 className="employee">Create Employee</h3> */}
                <form className="form"  onSubmit={this.onSubmit}>
                <h3 className="employee">Create Employee</h3>
                    <div className="form-group">
                        <label><strong>Full Name:</strong></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.name}
                            onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Profession:</strong></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.profession}
                            onChange={this.onChangeProfession}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Work State:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Phone Number (###-###-####):</strong></label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            value={this.state.phoneNumber}
                            onChange={this.onChangePhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Email Address:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.email}
                            onChange={this.onChangeEmailAddress}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Submit Date:</strong></label>
                        <div>
                            <DatePicker
                                selected={this.state.employeeCreated}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Employee" className="btn btn-primary" />
                    </div>
                </form>
            </React.Fragment>
        )
    }
}