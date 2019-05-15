import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Home from './pages/home';
import Step2 from './pages/step2';
import Step3 from './pages/step3';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            token: this.props.token
        };
    }

    componentWillMount() {
        this.unlisten = this.props.history.listen((location, action) => {
            if (action !== 'PUSH')
                return;

            let data = {
                'action': 'urlchange',
                'url': location.pathname
            };

            window.parent.postMessage(data, '*');
        });
    }

    /*
    componentDidUpdate(prevProps) {
        if (this.props.location === prevProps.location)
            return;

        let data = {
            'action': 'urlchange',
            'url': this.props.location.pathname
        };

        window.parent.postMessage(data, '*');
    }
    */

    componentWillUnmount() {
        this.unlisten();
    }

    render() {
        return (
            <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} token={this.state.token} />} />
                    <Route exact path="/step2" render={(props) => <Step2 {...props} token={this.state.token} />} />
                    <Route exact path="/step3" render={(props) => <Step3 {...props} token={this.state.token} />} />
                </Switch>
            </Suspense>
        );
    }
}

export default withRouter(App);