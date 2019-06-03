import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios';

import Dashboard from "./dashboard.component";

export default class Register extends Component {

    constructor(props){

        super(props)

        this.state={
            email:'',
            password:'',
            passwordRepeat:'',
            name:'',
            redirect:false
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePasswordRepeat = this.onChangePasswordRepeat.bind(this);
        this.onChangeName = this.onChangeName.bind(this);

    }

    onChangeEmail(e){
        this.setState({
            email: e.target.value
        })
    }

    onChangePassword(e){
        this.setState({
            password: e.target.value
        })
    }

    onChangePasswordRepeat(e){
        this.setState({
            passwordRepeat: e.target.value
        })
    }

    onChangeName(e){
        this.setState({
            name: e.target.value
        })
    }

    onSubmit(e){

        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Name: ${this.state.name}`);
        console.log(`Description: ${this.state.email}`);
        console.log(`Password: ${this.state.password}`);
        console.log(`Password Repeat: ${this.state.passwordRepeat}`);
        
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
        };

        axios.post('http://localhost:4000/api/user/create', newUser)
            .then(res => {

                this.setState({
                    email:'',
                    password:'',
                    passwordRepeat:'',
                    name:'',
                    redirect: true
                })

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
                                    <h5 className="card-title">Register</h5>
                                    <form onSubmit={this.onSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="name">Name</label>
                                            <input type="text" className="form-control" id="name" value={this.state.name} aria-describedby="emailHelp" onChange={this.onChangeName}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" id="password" aria-describedby="emailHelp" value={this.state.email} placeholder="Enter email" onChange={this.onChangeEmail}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" id="password" aria-describedby="emailHelp" value={this.state.password} onChange={this.onChangePassword}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password2">Repeat Password</label>
                                            <input type="password" className="form-control" id="password2" aria-describedby="emailHelp" value={this.state.passwordRepeat} onChange={this.onChangePasswordRepeat}/>
                                        </div>
                                        <p className="text-center">
                                            <button className="btn btn-primary">Sign Up</button>
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