import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios';

import Dashboard from "./dashboard.component";

export default class SignIn extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email:'',
            password:'',
            redirect:false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);

    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.email}`);
        console.log(`Todo Responsible: ${this.state.password}`);
        
        const user = {
            email: this.state.email,
            password: this.state.password,
        };

        axios.post('http://localhost:4000/api/user/signIn', user)
            .then(res => {
                if(res.data.success == true){

                    this.setState({
                        email: '',
                        password: '',
                        redirect: true
                    })

                }

            });

        
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    render() {

        const fullWidth = {
            width: '100%'
        };

        const { redirect } = this.state;

        if (redirect) {
            return <Redirect to='/dashboard'/>;
        }

        return (
            <Router>
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                            <div className="card" style={fullWidth}>
                                    <div className="card-body">
                                        <h5 className="card-title">Log In</h5>
                                        <form onSubmit={this.onSubmit}>
                                            <div className="form-group">
                                                <label htmlFor="email">Email</label>
                                                <input type="email" className="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={this.onChangeEmail}/>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="password">Password</label>
                                                <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={this.state.password} onChange={this.onChangePassword}/>
                                            </div>
                                            <p className="text-center">
                                                <button type="submit" className="btn btn-primary">Sign In</button>
                                            </p>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Route path="/dashboard" component={Dashboard} />
            </Router>
        )
    }
}