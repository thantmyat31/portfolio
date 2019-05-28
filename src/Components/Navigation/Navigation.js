import React, { Component } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return(
        <Navbar className="d-md-none d-flex top-navbar" collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link className="navbar-brand" to="/">
            <i className="fas fa-code"></i>
          </Link>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/services">Services</Link>
                <Link className="nav-link" to="/skills">Skills</Link>
                <Link className="nav-link" to="/contact">Contact</Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        );
    }
}

export default Navigation;