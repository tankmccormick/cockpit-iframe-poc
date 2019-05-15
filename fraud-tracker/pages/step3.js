import React, { Component } from 'react';

import BreadcrumbList from '../components/breadcrumb';

class Step3 extends Component {
    constructor(props) {
        super(props);

        this.items = [
            { text: 'Home', url: '/' },
            { text: 'Step 2', url: '/step2' },
            { text: 'Step 3', active: true }
        ];
    }

    render() {
        return (
            <section className="container">
                <BreadcrumbList items={this.items} />

                <h1>Fraud Tracker</h1>
                <h2>Step 3</h2>

                <p>{this.props.token}</p>

                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </section>
        );
    }
}

export default Step3;