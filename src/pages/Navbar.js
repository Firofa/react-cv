import React, { Component } from 'react'
import {HashLink} from 'react-router-hash-link';
import MenuIcon from '@material-ui/icons/Menu';

export default class Navbar extends Component {
    render() {
        return (
        <>
           <nav className="light-blue darken-4">
                <div className="container">
                    <div className="nav-wrapper">
                        <HashLink to="/" className="brand-logo">
                            CV
                        </HashLink>
                        <HashLink to="/" data-target="side-nav" className="sidenav-trigger">
                            <i className="material-icons"> <MenuIcon /> </i>
                        </HashLink>
                        <ul className="right hide-on-med-and-down">
                            <li>
                                <HashLink to="/">
                                Home
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/skills">
                                    Skills
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/experiences">
                                    Experiences
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/educations">
                                    Educations
                                </HashLink>
                            </li>
                            <li>
                                <HashLink to="/portfolios">
                                    Portfolios
                                </HashLink>
                            </li>
                        </ul>
                    </div>
                </div>   
            </nav> 
            <ul className="sidenav" id="side-nav">
                <li>
                    <HashLink to="/">
                        Home
                    </HashLink>
                </li>
                <li>
                    <HashLink to="/skills">
                        Skills
                    </HashLink>
                </li>
                <li>
                    <HashLink to="/experiences">
                        Experiences
                    </HashLink>
                </li>
                <li>
                    <HashLink to="/educations">
                        Educations
                    </HashLink>
                </li>
                <li>
                    <HashLink to="/portfolios">
                        Portfolios
                    </HashLink>
                </li>
            </ul>
        </>
        )
    }
}
