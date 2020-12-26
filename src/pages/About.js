import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6 className="mt-bottom">
                            <strong>ABOUT ME</strong>
                        </h6>
                        <p className="grey-text">
                            Hello There, My Name is Firizki Rofa. I'm a Web Developer. I like to make Websites using Codeigniter or Laravel. If you want to know more about me feel free to read my CV below. <br /> Have a nice day...
                        </p>
                    </div>
                    <div className="card-action">
                        <h6>
                            <strong>PERSONAL INFO</strong>
                        </h6>
                        <div className="row mt">
                            <div className="col s12 m6 16 x16">
                                <p><strong>Address:</strong> Jawa Barat, Indonesia</p>
                                <p><strong>Email:</strong> rizifaarsien@gmail.com</p>
                                <p><strong>Phone:</strong> +6283-872-899-914</p>
                            </div>
                            <div className="s12 m6 l6 x16">
                                <p><strong>Main Language:</strong> Bahasa Indonesia</p>
                                <p><strong>Second Language:</strong> English</p>
                                <p><strong>Third Language:</strong> Bahasa Sunda</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
