import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router';
import axios from 'axios';
import './signin.css'

import { connect } from 'react-redux';
import { updateUser } from '../actions/users-action';

import Dashboard from "./dashboard.component";

class SignIn extends Component {

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
        
        const user = {
            email: this.state.email,
            password: this.state.password,
        };



        axios.post(this.props.url+'/api/user/signIn', user)
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

    onUpdateUser(){
        this.props.onUpdateUser()
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

        console.log(this.props)

        const fullWidth = {
            width: '100%'
        };

        const { redirect } = this.state;

        if (redirect) {
            {return <Redirect to='/dashboard'/>;}
        }

        return (
            <Router>
                <div className="signin full-height">
                    <div className="cover">
                        <div className="container full-height">
                            <div className="row align-items-center full-height">
                                <div className="col-lg-6 offset-lg-3">
                                <div className="card" style={fullWidth}>
                                        <div className="card-body">
                                            <h5 className="card-title">Log In</h5>
                                            <form onSubmit={this.onSubmit}>
                                                <div className="form__group">
                                                    <input type="email" id="email" className="form__field" placeholder="email" value={this.state.email} onChange={this.onChangeEmail}/>
                                                    <label htmlFor="email" className="form__label">Email</label>
                                                </div>
                                                <div className="form__group">
                                                    <input type="password" id="password" className="form__field" placeholder="pass" value={this.state.password} onChange={this.onChangePassword}/>
                                                    <label htmlFor="password" className="form__label">Clave</label>
                                                </div>
                                                <p className="text-center sign-div">
                                                    <button type="submit" className="btn btn-success custom-button">Sign In</button>
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

const mapStateToProps = state => ({
    user: state.user,
    url: state.url
})

const mapActionsToProps = {
    onUpdateUser: updateUser
}

export default connect(mapStateToProps)(SignIn);