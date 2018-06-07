import React, { Component } from 'react';
import "./Account.css";
import axios from 'axios';

class Account extends Component {
    constructor() {
        super();

        this.state = {
            input_username: '',
            input_bio: ''
        }

        this.handleInputUsername = this.handleInputUsername.bind(this);
        this.handleInputBio = this.handleInputBio.bind(this);



    }

    handleInputUsername(value) {
        this.setState({ input_username: value });
    }

    handleInputBio(value) {
        this.setState({ input_bio: value });
    }

    componentDidMount(){ 
        console.log('hit')
        let body = { value: this.handleInputBio + this.handleInputUsername }
        axios.post('/api/create_user', 
        body)
    }



    render() {
        return (
            <div className="wholePage" >
                <link href="https://fonts.googleapis.com/css?family=Squada+One" rel="stylesheet" />
                <h1 className="main">Account Information</h1>
                <h2 className="profile-pic">Avatar:</h2>
                <img className="image-placeholder" href="https://placeholder.com" src="http://via.placeholder.com/350x150" alt=""/>
                <h2 className="Username">Change Username:</h2>
                <div className="userBox">
                    <input className="username-box" value={this.state.input_username}
                        placeholder="Change Username here" onChange={(e) => { this.handleInputUsername(e.target.value) }} />
                </div>               
                <div className="subButton">
                    <button className="submitButton" onClick={this.componentDidMount}>Submit Changes</button>
                </div>
            </div>
        )
    }
}

export default Account;