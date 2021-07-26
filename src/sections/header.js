import './main.css';
import Logo2 from '../photo/A.png';
import Logo3 from '../photo/al.png';
import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div className='headerr d-flex justify-content-between'>

                <div className='soz '>

                    <ul>
                        <li> <img src={Logo2} alt="" className='al' /></li>
                        <li><a href="#section1" className='fw-bold ha'>Aboute</a></li>
                        <li><a href="#section2" className='ha'>Services</a></li>
                        <li><a href="#section3" className='ha'>Works</a></li>
                        <li><a href="#section4" className='ha'>Blog</a></li>
                    </ul>
                </div>

                <div className='list'>

                </div>
            </div>
        );
    }
}
