import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Home from './Components/Home/Home';
import Navigation from './Components/Navigation/Navigation';
import Services from './Components/Services/Services';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';
import LeftSideBar from './Components/LeftSideBar/LeftSideBar';
import NotFound from './Components/NotFound/NotFound';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Navigation />
          <Container fluid>
            <Row className="px-0">   
              <LeftSideBar />
              <Col className="px-0 main-content" md={{ span:9, offset:3 }}>
                <Switch>
                  <Route exact path="/" component={ Home } />
                  <Route path="/services" component={ Services } />
                  <Route path="/skills" component={ Skills } />
                  <Route path="/contact" component={ Contact } />
                  <Route path="/notfound" component={ NotFound } />
                  <Redirect to="/notfound" />
                </Switch>
              </Col>
            </Row>
          </Container>
        </Router>
      </div>
    );
  }
}

export default App;
