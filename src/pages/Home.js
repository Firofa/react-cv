import React, { Component } from 'react';
import Navbar from './Navbar';
import Profile from './Profile';
import About from './About';
import Skills from './Skills';
import Educations from './Educations';
import Experiences from './Experiences';
import Portfolios from './Portfolios';

export default class Home extends Component {
    render() {
        return(
            <section>
                <Navbar />
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3">
                            <Profile />
                        </div>
                        <div className="col s12 m8 l9">
                            <About />
                            <Skills />
                            <Experiences />
                            <Educations />
                            <Portfolios />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}