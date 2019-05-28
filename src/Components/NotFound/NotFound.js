import React, { Component } from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';

class NotFound extends Component {
    render() {
        return(
            <div className="not-found">
                <h3>The Page You Find is Not Found.</h3>
                <p>Please return to the <Link to="/">Home</Link> page.</p>
            </div>
        );
    }
}

export default NotFound;