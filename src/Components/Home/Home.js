import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        return(
            <div className="home">
                <div className="exp now-exp">
                    <h3><i className="fas fa-location-arrow"></i>Now</h3>
                    <p>Working as Team Leader of Frontend Web Development Team @ Seasoft Asia.</p>
                </div>
                <div className="exp past-exp">
                    <h3><i className="fas fa-location-arrow"></i>Past Experience</h3>
                    <p>Worked as Freelance Web Developer & Part-time Trainer.</p>
                    <p>Worked as Senior Web Developer @ 72coder Co.,Ltd.</p>
                    <p>Worked as Full-stack Developer @ Lucid Unity Co.,Ltd.</p>
                    <p>Founder @ ProCoder IT Solution.</p>
                </div>
            </div>
        );
    }
}

export default Home;