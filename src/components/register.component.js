import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios';
import './register.css'

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
            <div className="register full-height">
                <div className="cover">
                <div className="container full-height">
                    <div className="row align-items-center full-height">
                        <div className="col-lg-6 offset-lg-3">
                            <div className="card" style={fullWidth}>
                                    <div className="card-body">
                                        <h5 className="card-title">Register</h5>
                                        <form onSubmit={this.onSubmit}>
                                            <div class="form__group">
                                                <input type="text" class="form__field" id="name" value={this.state.name} aria-describedby="emailHelp" onChange={this.onChangeName} placeholder="email"/>
                                                <label for="name" class="form__label">Nombre</label>
                                            </div>
                                            <div class="form__group">
                                                <input type="email" class="form__field" id="email" value={this.state.email} aria-describedby="emailHelp" onChange={this.onChangeEmail} placeholder="email"/>
                                                <label for="email" class="form__label">Email</label>
                                            </div>
                                            <div class="form__group">
                                                <input type="password" class="form__field" id="password" value={this.state.password} aria-describedby="emailHelp" onChange={this.onChangePassword} placeholder="email"/>
                                                <label for="email" class="form__label">Clave</label>
                                            </div>
                                            <div class="form__group">
                                                <input type="password" class="form__field" id="repeat-password" value={this.state.passwordRepeat} aria-describedby="emailHelp" onChange={this.onChangePasswordRepeat} placeholder="email"/>
                                                <label for="repeat-password" class="form__label">Repetir Clave</label>
                                            </div>
                                            
                                            <p className="text-center sign-div">
                                                <button type="submit" className="btn btn-primary custom-button">Sign Up</button>
                                            </p>
                                        </form>
                                    </div>
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