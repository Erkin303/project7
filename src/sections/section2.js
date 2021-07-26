import './main.css';


import Tel from '../photo/tel.png';


import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container section2 mt-2 mb-2" id='section2'>
                    <div className='w-100 d-flex justify-content-start'>
                        <div className='sdf'> <a href="#"> Services</a>
                            <p className='fs-1 text-dark'>What actually    I love to do</p></div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-4 col-sm-12">
                            <div className='m-1 d-flex'>
                                <img src={Tel} alt="" />
                                <p className='fs-3 m-3'>UX Research</p>
                            </div>
                            <p className='m-1'>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className='m-1 d-flex'>
                                <img src={Tel} alt="" />
                                <p className='fs-3 m-3'>UX Research</p>
                            </div>
                            <p className='m-1'>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div className='m-1 d-flex'>
                                <img src={Tel} alt="" />
                                <p className='fs-3 m-3'>UX Research</p>
                            </div>
                            <p className='m-1'>New demos are continually added and buying a single license for Mak gives you access to all of what's shown below, plus everything that will be added in the future.</p>
                        </div>

                    </div>
                </div>


            </div>
        );
    }
}
