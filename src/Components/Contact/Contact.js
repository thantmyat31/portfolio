import React, { Component } from 'react';
import './Contact.css';
import { Container, Col, Row, Form, Button } from 'react-bootstrap';
import Map from '../Map/Map';

class Contact extends Component {
    render() {
        return(
            <div className="contact">
                <Container fluid>
                    <Row>
                        <Col className="order-md-1 order-2" lg={7} md={6}>
                            <div className="contact-form">
                                <Form>
                                    <Form.Group>
                                        <Form.Control size="small" type="text" placeholder="Enter your name" />
                                    </Form.Group>       
                                    <Form.Group>
                                        <Form.Control size="small" type="email" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group>
                                        <Form.Control size="small" as="textarea" rows="3" placeholder="Your Message" />
                                    </Form.Group>
                                    <Button variant="default" className="submit-btn" type="submit" block>
                                    Send Message
                                    </Button>
                                </Form>
                            </div>
                        </Col>
                        <Col className="order-md-2 order-1" lg={5} md={6}>
                            <div className="contact-hour">
                                <i className="fas fa-clock fa-lg"></i> 
                                <span className="d-inline-block">
                                    <b>Office Hours</b>
                                    <small>9:00AM - 5:00PM</small>
                                </span>
                            </div>
                            <div className="contact-info">
                                <span className="d-block">
                                    <i className="fas fa-phone"></i>
                                    <b>09425331210</b>
                                </span>
                                <span className="d-block">
                                    <i className="far fa-envelope"></i>
                                    <b>thantmyat1234@gmail.com</b>
                                </span>
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
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Map />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Contact;