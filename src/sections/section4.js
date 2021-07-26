import './main.css';
import bir from '../photo/1.png';
import ikki from '../photo/2.png';
import uch from '../photo/3.png';
import tort from '../photo/4.png';
import besh from '../photo/5.png';



import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container section2 mt-2 mb-5" >
                    <div className='w-100 d-flex justify-content-start'>
                        <div className='sdf'> <a href="#"> Clients</a>
                            <p className='fs-1 text-dark'>Big Deal With</p></div>
                    </div>
                    <div className="row mb-5 d-flex justify-content-center">
                        <div className="col-md-2 col-sm-6 pb-5">
                            <div className='smallBox '>
                                <div> <img src={bir} alt="" className='smallImg' /></div>

                                <p className='fs-3 text-center m-3'>Slack</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 pb-5">
                            <div className='smallBox '>
                                <div> <img src={ikki} alt="" className='smallImg' /></div>

                                <p className='fs-3 text-center m-3'>Medium</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6  pb-5">
                            <div className='smallBox '>
                                <div> <img src={uch} alt="" className='smallImg' /></div>

                                <p className='fs-3 text-center m-3'>Microsoft</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6 pb-5">
                            <div className='smallBox '>
                                <div> <img src={tort} alt="" className='smallImg' /></div>

                                <p className='fs-3 text-center m-3'>Zeplin</p>
                            </div>
                        </div>
                        <div className="col-md-2 col-sm-6  pb-5">
                            <div className='smallBox '>
                                <div> <img src={besh} alt="" className='smallImg' /></div>

                                <p className='fs-3 text-center m-3'>Shopify</p>
                            </div>
                        </div>


                    </div>
                </div>


            </div>
        );
    }
}
