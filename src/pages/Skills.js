import React, { Component } from 'react'

export default class Skills extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>PROFFESIONAL SKILL</strong>
                        </h6>
                        <div className="row mt-top">
                            <div className="col s6">
                                <p>HTML</p>
                                <div className="progress gray-lighten-1">
                                    <div className="determinate blue" style={{width:'75%'}}>
                                    </div> 
                                </div>
                            </div>
                            <div className="col s6">
                                <p>CSS</p>
                                <div className="progress gray-lighten-1">
                                    <div className="determinate blue" style={{width:'65%'}}>
                                    </div> 
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Javascript</p>
                                <div className="progress gray-lighten-1">
                                    <div className="determinate blue" style={{width:'60%'}}>
                                    </div> 
                                </div>
                            </div>
                            <div className="col s6">
                                <p>PHP</p>
                                <div className="progress gray-lighten-1">
                                    <div className="determinate blue" style={{width:'70%'}}>
                                    </div> 
                                </div>
                            </div>
                            <div className="col s6">
                                <p>MySQL</p>
                                <div className="progress gray-lighten-1">
                                    <div className="determinate blue" style={{width:'85%'}}>
                                    </div> 
                                </div>
                            </div>
                            <div className="col s6">
                                <p>Jquery</p>
                                <div className="progress gray-lighten-1">
                                    <div className="determinate blue" style={{width:'40%'}}>
                                    </div> 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
