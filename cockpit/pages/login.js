import React, { Component } from 'react';

class Login extends Component {
    loginUser = () => {
        this.props.loginUser(this.newGuid());
    }

    newGuid = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }

    render() {
        return (
            <section className="container">
                <h1>Login</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Mauris iaculis, tortor sed aliquam condimentum, vitae congue lacus dolor a nulla.
                    Curabitur pretium felis et sem tristique rhoncus.
                    In commodo dolor dolor, vitae lobortis orci tempus et.
                    </p>

                <button onClick={this.loginUser}>
                    Login
                    </button>
            </section>
        );
    }
}

export default Login;