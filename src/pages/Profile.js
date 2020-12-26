import React, { Component } from 'react';
import ImgProfile from '../images/firo1.png';
import {HashLink} from 'react-router-hash-link';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import CloseIcon from '@material-ui/icons/Close';
import InstagramIcon from '@material-ui/icons/Instagram';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

export default class Profile extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-image">
                        <img className="activator" src={ImgProfile} alt="Firizki Rofa" />
                        <HashLink to="#" className="btn-floating halfway-fab waves-effect wave-light light-blue">
                            <i><MoreVertIcon className="material-icons activator" /></i>
                        </HashLink>
                    </div>
                    <div className="card-content">
                        <span className="card-title activator grey-text text-darken-4 pl-4">
                            <h5>Firizki Rofa</h5>
                        </span>
                        <p>Web Developer</p>
                    </div>
                    <div className="card-reveal">
                            <div className="card-title grey-text text-darken-4">
                            Follow Me
                            <i><CloseIcon className="right" fontSize="small"/></i>
                            </div>
                        <p className="flex-container">
                            <WhatsAppIcon className="grey-text text-darken-4 social-style" />
                            <GitHubIcon className="grey-text text-darken-4 social-style" />
                            <MailOutlineIcon className="grey-text text-darken-4 social-style" />
                            <InstagramIcon className="grey-text text-darken-4 social-style" />
                        </p>
                    </div>
                </div>  
            </div>
        )
    }
}


