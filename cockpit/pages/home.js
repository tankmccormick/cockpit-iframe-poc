import React, { Component } from 'react';

class Home extends Component {
    render() {
        document.title = 'Cockpit';

        return (
            <section className="container">
                <h1>Home</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris iaculis, tortor sed aliquam condimentum, vitae congue lacus dolor a nulla.
                    Curabitur pretium felis et sem tristique rhoncus.
                    In commodo dolor dolor, vitae lobortis orci tempus et.
                </p>

                <p>{this.props.token}</p>
            </section>
        );
    }
}

export default Home;