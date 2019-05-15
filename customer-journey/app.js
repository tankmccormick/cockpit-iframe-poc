import React, { Component } from 'react';
import Home from './pages/home';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: this.props.token
        };
    }

    render() {
        return (
            <Home token={this.state.token} />
        );
    }
}

export default App;