import './main.css';
import Tel from '../photo/tel.png';


import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className='sdf'> <a href="#"> Contact Me</a>
                        <p className='fs-1 text-dark'>Big Deal With</p></div>
                    <div className='d-flex justify-content-between'>
                        <div className='sameb'> <p className='fs-3'>Let me know if you want to talk
                            about a potential collaboration.
                            I'm available for freelance work.</p></div>
                        <p><a href="#">infoname@mail.com</a></p>
                    </div>
                    <div className=" container mt-2">
                        <input type="text" placeholder="What'syour name ?" className='forms' />
                        <input type="email" placeholder="Your email" className='forms' />
                        <input type="text" placeholder="Tell me about your project" className='forms' />

                        <div className='d-flex justify-content-start'> <button className='talkBtn  btnm'>Get a Quote</button></div>
                    </div>
                    <div className='mt-3 mb-3'>
                        <h2 className='text-center'>Let's be Friends</h2>
                        <p className='text-center'>
                            <img src={Tel} alt="" className='m-3' />
                            <img src={Tel} alt="" className='m-3' />
                            <img src={Tel} alt="" className='m-3' />



                        </p>

                    </div>
                </div>
            </div>
        );
    }
}
