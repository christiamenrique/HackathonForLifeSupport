import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import "../style/create-employee.css";
import EmployeeNav from "../elements/employeenav"


export default class CreateStudent extends Component {
    constructor(props) {
        super(props);

        this.onChangeImage = this.onChangeImage.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeTeamName = this.onChangeTeamName.bind(this);
        this.onChangeDOB = this.onChangeDOB.bind(this);
        this.onChangeWin = this.onChangeWin.bind(this);
        this.onChangeLoss = this.onChangeLoss.bind(this);
        this.onChangeParentName = this.onChangeParentName.bind(this);
        this.onChangeParentPhoneNumber = this.onChangeParentPhoneNumber.bind(this);
        this.onChangeStudentCreated = this.onChangeStudentCreated.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            image:"",
            name: '',
            description: '',
            teamName: '',
            DOB: '',
            win: 0,
            loss: 0,
            parentName: '',
            parentPhoneNumber: '',
            studentCreated: new Date(),
        }
    }

    onChangeImage(e) {
        this.setState({
            image: e.target.value
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

    onChangeTeamName(e) {
        this.setState({
            teamName: e.target.value
        })
    }

    onChangeDOB(e) {
        this.setState({
            DOB: e.target.value
        })
    }

    onChangeStudentCreated(date) {
        this.setState({
            studentCreated: date
        })
    }
    onChangeWin(e) {
        this.setState({
            win: e.target.value
        })
    }
    onChangeLoss(e) {
        this.setState({
            loss: e.target.value
        })
    }
    onChangeParentName(e) {
        this.setState({
            parentName: e.target.value
        })
    }
    onChangeParentPhoneNumber(e) {
        this.setState({
            parentPhoneNumber: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault();

        const students = {

            image: this.state.image,
            name: this.state.name,
            description: this.state.description,
            teamName: this.state.teamName,
            DOB: this.state.DOB,
            win: this.state.win,
            loss: this.state.loss,
            parentName: this.state.parentName,
            parentPhoneNumber: this.state.parentPhoneNumber,
            studentCreated: this.state.studentCreated
        }
        console.log(students);

        axios.post('/students/add', students)
            .then(res => console.log(res.data));

        // window.location = '/view-student';
    }

    render() {
        return (
            <React.Fragment>
                <EmployeeNav/>
                <br></br>
                <br></br>
                <br></br>
                <form className="form" onSubmit={this.onSubmit}>
                <h3 className="employee">Create Student</h3>
                <div className="form-group">
                        <label><strong>Student Image URL:</strong></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.image}
                            onChange={this.onChangeImage}
                        />
                    </div>
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
                        <label><strong>Description:</strong></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeDescription}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Team Name:</strong></label>
                        <input
                            type="text"
                            className="form-control"
                            value={this.state.teamName}
                            onChange={this.onChangeTeamName}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Date Of Birth MM/DD/YYYY:</strong></label>
                        <input
                            type="text"
                            required
                            className="form-control"
                            value={this.state.DOB}
                            onChange={this.onChangeDOB}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Win:</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.win}
                            onChange={this.onChangeWin}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Loss:</strong></label>
                        <input
                            type="number"
                            className="form-control"
                            value={this.state.loss}
                            onChange={this.onChangeLoss}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Guardian Full Name:</strong></label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            value={this.state.parentName}
                            onChange={this.onChangeParentName}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Guardian Phone Number (###-###-####):</strong></label>
                        <input
                            required
                            type="text"
                            className="form-control"
                            value={this.state.onChangeParentPhoneNumber}
                            onChange={this.onChangeParentPhoneNumber}
                        />
                    </div>
                    <div className="form-group">
                        <label><strong>Submit Date:</strong></label>
                        <div>
                            <DatePicker
                                selected={this.state.studentCreated}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Student" className="btn btn-primary" />
                    </div>
                </form>
            </React.Fragment>
        )
    }
}