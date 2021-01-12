import React, { Component } from 'react';
import './Registration.css';
class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullName: "",
            phone: "",
            email: "",
            password: "",
            reEnterPassword: ""
        }
    }
    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log("this.State", this.state);
        if (this.state.fullName !== "" && this.state.phone !== "" && this.state.email !== "" && this.state.password !== "" && this.state.reEnterPassword !== "") {
            alert("Registration successfully done");
        }
        else{
            alert("Please fill all the details");
        }
    }
    render() {
        return (
            <div className="registeationCotainer">
                <form onSubmit={this.handleSubmit}>
                    <label className="label">Full Name:</label>
                    <br />
                    <input type="text" name="fullName" value={this.state.fullName} onChange={this.handleChange} />
                    <br />
                    <label className="label">Phone:</label>
                    <br />
                    <input type="text" name="country code" value="+91" size="2" />
                    <input type="number" name="phone" maxLength="10" pattern="[0-9]*" value={this.state.phone} onChange={this.handleChange} />
                    <br />
                    <label>Email: </label>
                    <br />
                    <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="Password" id="pass" name="password" value={this.state.password} onChange={this.handleChange} />
                    <br />
                    <label>Re-type password:</label>
                    <br />
                    <input type="Password" id="repass" name="reEnterPassword" value={this.state.reEnterPassword} onChange={this.handleChange} />
                    <br />
                    <button className="login" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        );
    }
}

export default Registration;