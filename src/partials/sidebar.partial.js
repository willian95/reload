import React, { Component } from 'react';

export default class Sidebar extends Component {

    render() {

        const sidebarStyle={
            position: 'fixed',
            overflowY: 'auto',
            height: '250px',
            height: '100vh',
            top: '60px',
            backgroundColor: 'red',
        }

        return (
            <div style={sidebarStyle}>
                <p>Welcome to Home Sidebar!!</p>
            </div>
        )
    }
}