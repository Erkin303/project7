import './main.css';
import Left from '../photo/left.png';
import Right from '../photo/right.png';


import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container section2 mt-2 mb-2" id='section3'>
                    <div className='w-100 d-flex justify-content-start'>
                        <div className='sdf'> <a href="#"> Portfolio</a>
                            <p className='fs-1 text-dark'>All Creative Projects</p></div>
                    </div>
                    <div className="row mb-5">
                        <div className="col-md-6 col-sm-12">
                            <div className='m-1'>
                                <img src={Left} alt="" className='lr' />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className='m-1'>
                                <img src={Right} alt="" className='lr' />
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        );
    }
}
