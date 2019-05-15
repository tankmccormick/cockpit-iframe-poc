import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem
} from 'reactstrap';

export default class MainNav extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    logoutUser = () => {
        this.props.logoutUser();
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <header>
                <Navbar color="light" light expand="md">
                    <div className="container">
                        <NavLink to="/" className="navbar-brand">Cockpit</NavLink>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav navbar>
                                <NavItem className="nav-link">
                                    <NavLink to="/fraud-tracker">Fraud Tracker</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <NavLink to="/customer-journey">Customer Journey</NavLink>
                                </NavItem>
                                <NavItem className="nav-link">
                                    <button onClick={this.logoutUser}>
                                        Logout
                                    </button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </header>
        );
    }
}