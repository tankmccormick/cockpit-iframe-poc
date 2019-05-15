import React, { Component, Suspense, lazy } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

import Login from './pages/login';
import Home from './pages/home';
import IFramePage from './pages/iframe-page';

import MainNav from './components/main-nav';

class App extends Component {
    constructor(props) {
        super(props);

        this.loginUser = this.loginUser.bind(this);
        this.logoutUser = this.logoutUser.bind(this);

        this.state = {
            token: null,
            isChecking: true,
            appUrl: this.props.starthash
        };
    }

    componentWillMount() {
        this.checkLogin();

        this.unlisten = this.props.history.listen((location, action) => {
            this.setState({
                appUrl: ''
            });
        });
    }

    componentWillUnmount() {
        this.unlisten();
    }

    loginUser = (token) => {
        sessionStorage.setItem('token', token);
        this.checkLogin();
    }

    logoutUser = () => {
        sessionStorage.removeItem('token');
        this.checkLogin();
    }

    checkLogin = () => {
        let token = null;
        if (sessionStorage.length > 0) {
            token = sessionStorage.token;
        }

        this.setState({
            token: token,
            isChecking: false
        });
    }

    render() {
        const { token, isChecking, appUrl } = this.state;
        if (isChecking) {
            return <div>Loading...</div>;
        } else if (token === null) {
            return <Login loginUser={this.loginUser} />;
        } else {
            return (
                <div>
                    <MainNav logoutUser={this.logoutUser} />

                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            <Route exact path="/" render={(props) => <Home {...props} token={token} />} />
                            <Route path="/fraud-tracker" render={(props) => <IFramePage {...props} token={token} title="Fraud Tracker" url={"http://localhost:8081" + appUrl} />} />
                            <Route path="/customer-journey" render={(props) => <IFramePage {...props} token={token} title="Customer Journey" url={"http://localhost:8082" + appUrl} />} />
                        </Switch>
                    </Suspense>
                </div>
            );
        }
    }
}

export default withRouter(App);