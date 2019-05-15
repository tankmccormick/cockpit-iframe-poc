import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <section className="container">
                <h1>Fraud Tracker</h1>

                <p>{this.props.token}</p>

                <NavLink to="/step2">Step2</NavLink>
            </section>
        );
    }
}

export default Home;