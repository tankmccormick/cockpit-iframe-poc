import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import BreadcrumbList from '../components/breadcrumb';

class Step2 extends Component {
    constructor(props) {
        super(props);

        this.items = [
            { text: 'Home', url: '/' },
            { text: 'Step 2', active: true }
        ];
    }

    render() {
        return (
            <section className="container">
                <BreadcrumbList items={this.items} />

                <h1>Fraud Tracker</h1>
                <h2>Step 2</h2>

                <p>{this.props.token}</p>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris iaculis, tortor sed aliquam condimentum, vitae congue lacus dolor a nulla.
                    Curabitur pretium felis et sem tristique rhoncus.
                    In commodo dolor dolor, vitae lobortis orci tempus et.
                </p>

                <NavLink to="/step3">Step3</NavLink>
            </section>
        );
    }
}

export default Step2;