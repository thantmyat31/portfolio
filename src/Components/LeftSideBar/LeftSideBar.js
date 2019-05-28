import React, { Component } from 'react';
import './LeftSideBar.css';
import { Link } from 'react-router-dom';
import { Col, Image } from 'react-bootstrap';

class LeftSideBar extends Component {
    render() {
        return(
        <Col className="d-md-block d-none px-0 bg-gray" md={3}> 
            <div className="img-wrapper">
                <Image src="/img/profile.jpg" fluid roundedCircle />
            </div>
            <h3 className="text-center text-primary name">J.Casper</h3>
            <p className="text-center job">Frontend & JavaScript Developer in Myanmar</p>
            <ul className="link-list">
                <li>
                    <Link className="side-link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="side-link" to="/services">Services</Link>
                </li>
                <li>
                    <Link className="side-link" to="/skills">Skills</Link>
                </li>
                <li>
                    <Link className="side-link" to="/contact">Contact</Link>
                </li>
            </ul>
            <div className="social-wrapper">
                <a href="http://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-facebook-square"></i>
                </a>
                <a href="http://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="http://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter-square"></i>
                </a>
                <a href="http://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-youtube"></i>
                </a>
            </div>
            <div className="copy-wrapper">
                <p className="text-center copy">
                    Copyright &copy; 2019 All rights reserved <br/>
                    Using ReactJS and coded by <span className="text-primary">J.Casper</span>
                </p>
            </div>
        </Col>
        );
    }
}

export default LeftSideBar;