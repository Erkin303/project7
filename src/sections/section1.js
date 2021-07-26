import './main.css';
import Logo from '../photo/person.png'

import React, { Component } from 'react';



export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container section1">
                    <div className="row">
                        <div className="col-md-4 col-sm-12 d-flex align-items-center">
                            <div className='p-3 m-1'>
                                <p className='hello'>Hello,</p>
                                <h1>Adam Zakob</h1>
                                <p>a freelance UX Designer</p>
                                <button className='talkBtn'>Let's Talk</button>

                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className='m-1'>
                                <img src={Logo} alt="" className='person' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
