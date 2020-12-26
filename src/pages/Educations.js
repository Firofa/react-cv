import React, { Component } from 'react';
import {HashLink} from 'react-router-hash-link';

export default class Educations extends Component {
    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-content">
                        <h6>
                            <strong>INFORMAL EDUCATIONS</strong>
                        </h6>
                        <table className="stripped">
                            <thead>
                                <tr>
                                    <th>Certificate</th>
                                    <th>Date</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Web Development</td>
                                    <td>Jan 2021</td>
                                    <td><HashLink to="#" className="btn blue lighten-2">View</HashLink></td>
                                </tr>
                                <tr>
                                    <td>React Fundamental</td>
                                    <td>Nov 2020</td>
                                    <td><HashLink to="#" className="btn blue lighten-2">View</HashLink></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
