import React, { Component } from 'react';
import Sidebar from '../partials/sidebar.partial';

import digitel from '../images/digitel.jpg';
import movilnet from '../images/movilnet.jpg';
import movistar from '../images/movistar.jpg';

export default class Dashboard extends Component {
    render() {

        const contentWrapper = {
            paddingLeft: '250px'
        }

        const fullImage={
            width: '100%',
            height: '100%'
        }

        const card={
            height: '150px',
            padding: '1rem',
            cursor: 'pointer'
        }

        return (
            <div>
                <Sidebar></Sidebar>
                <div style={contentWrapper}>
                    
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4"></div>
                            <div className="col-lg-4">
                                <div class="card" style={card}>
                                    <img src={movilnet} width="30" height="30" style={fullImage} alt="CodingTheSmartWay.com" />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">Monto a recargar: </label>
                                    <select className="form-control">
                                        <option>500 Bs.</option>
                                        <option>1000 Bs.</option>
                                        <option>5000 Bs.</option>
                                    </select>
                                </div>

                                <p className="text-center">
                                    <button className="btn btn-success">Comprar</button>
                                </p>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}