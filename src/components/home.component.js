import React, { Component } from 'react';
import './home.css'

export default class Home extends Component {
    render() {

        return (

            <div>
                <div className="backgroundImage">
                    <div className="cover">
                        <div className="container full-height-vh">
                            <div className="row full-height-vh align-items-center">
                                <div className="col-lg-6">
                                    <h1 className="primary-text text-white">Reload</h1>
                                    <h5 className="text-white">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos inventore optio et adipisci, deleniti repellat nemo fugit neque, quisquam ea modi consequatur, in ipsum debitis magnam dolore itaque laborum suscipit.
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <h1 className="text-center">Nosotros</h1>
                            </div>
                            <div className="col-lg-6 offset-lg-3">
                                <p className="text-center">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus et consequatur neque in quam modi commodi maiores, aut mollitia ut natus optio nihil voluptate quo rerum eaque est laudantium minima.
                                </p>
                            </div>
                        </div>
                        <div className="row about-description">
                            <div className="col-lg-4 col-md-4">
                                <div className="text-center">
                                    <i class="far fa-clock custom-icon"></i>
                                    <p className="about-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reprehenderit modi eos velit, culpa accusantium! Nisi quibusdam.  
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="text-center">
                                    <i class="fas fa-shield-alt custom-icon"></i>
                                    <p className="about-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reprehenderit modi eos velit, culpa accusantium! Nisi quibusdam.  
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-4">
                                <div className="text-center">
                                    <i class="far fa-clock custom-icon"></i>
                                    <p className="about-text">
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui reprehenderit modi eos velit, culpa accusantium! Nisi quibusdam.  
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="form-row">
                                            <div className="col-lg-12">
                                                <div class="text-center">
                                                    <h3>Contáctanos</h3>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div class="form__group">
                                                    <input type="text" id="name" class="form__field" placeholder="Tu nombre" />
                                                    <label for="name" class="form__label">Nombre</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div class="form__group">
                                                    <input type="email" id="email" class="form__field" placeholder="Your Email" />
                                                    <label for="email" class="form__label">Email</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div class="form__group">
                                                    <textarea id="message" class="form__field" placeholder="Your Message" rows="5"></textarea>
                                                    <label for="message" class="form__label">Mensaje</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="text-center">
                                                    <button className="btn btn-success custom-button">
                                                        ENVIAR
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
          
        )
    }
}