import React, { Component } from 'react';
import './Services.css';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Services extends Component {
    render() {
        return(
            <div className="services">
                <Container fluid>
                    <Row>
                        <Col className="d-flex d-flex-column" sm={5}>
                            <Image className="align-self-center img-serv" src="/img/design-2.jpg" fluid />
                        </Col>
                        <Col className="d-flex d-flex-column" sm={7}>
                            <div className="align-self-center">   
                                <h3>Web Design Service</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit necessitatibus consequuntur officiis quasi iure, expedita voluptate asperiores eaque illo. Nostrum necessitatibus reprehenderit vel quo inventore architecto deleniti molestiae beatae quasi.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex d-flex-column order-sm-1 order-2" sm={7}>
                            <div className="align-self-center">   
                                <h3>Web Development Service</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit necessitatibus consequuntur officiis quasi iure, expedita voluptate asperiores eaque illo. Nostrum necessitatibus reprehenderit vel quo inventore architecto deleniti molestiae beatae quasi.</p>
                            </div>
                        </Col>
                        <Col className="d-flex d-flex-column order-sm-2 order-1" sm={5}>
                            <Image className="align-self-center img-serv" src="/img/development.jpg" fluid />
                        </Col>
                    </Row>
                    <Row>
                        <Col className="d-flex d-flex-column" sm={5}>
                            <Image className="align-self-center img-serv" src="/img/software-2.jpg" fluid />
                        </Col>
                        <Col className="d-flex d-flex-column" sm={7}>
                            <div className="align-self-center">   
                                <h3>Desktop Application Service</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit necessitatibus consequuntur officiis quasi iure, expedita voluptate asperiores eaque illo. Nostrum necessitatibus reprehenderit vel quo inventore architecto deleniti molestiae beatae quasi.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row>   
                        <Col className="d-flex d-flex-column order-sm-1 order-2" sm={7}>
                            <div className="align-self-center">   
                                <h3>Mobile Application Service</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit necessitatibus consequuntur officiis quasi iure, expedita voluptate asperiores eaque illo. Nostrum necessitatibus reprehenderit vel quo inventore architecto deleniti molestiae beatae quasi.</p>
                            </div>
                        </Col>
                        <Col className="d-flex d-flex-column order-sm-2 order-1" sm={5}>
                            <Image className="align-self-center img-serv" src="/img/mobile-app.jpg" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Services;