import React, { Component } from 'react';
import './Skills.css';
import { Container, Row, Col } from 'react-bootstrap';

class Skills extends Component {
    render() {
        return(
            <div className="skills">
                <Container>
                    <Row>
                        <Col>
                            <h3>Frontend Skills</h3>
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Bootstrap</li>
                                <li>Semantic UI</li>
                                <li>Foundation</li>
                                <li>Well known in Responsive Design</li>
                                <li>JavaScript</li>
                                <li>jQuery</li>
                                <li>AngularJS</li>
                                <li>ReactJS</li>
                                <li>VueJS</li>
                            </ul>

                            <h3>Backend Skills</h3>
                            <ul>
                                <li>Core PHP</li>
                                <li>PHP OOP</li>
                                <li>Laravel</li>
                                <li>NodeJS</li>
                                <li>ExpressJS</li>
                                <li>AJAX</li>
                                <li>JSON</li>
                                <li>RESTful API</li>
                            </ul>

                            <h3>Mobile App Development Skills</h3>
                            <ul>
                                <li>Ionic</li>
                                <li>NativeScript</li>
                                <li>React Native</li>
                                <li>Cordova & PhoneGap</li>
                            </ul>

                            <h3>Desktop App Development Skills</h3>
                            <ul>
                                <li>ElectronJS</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Skills;