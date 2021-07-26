import './main.css';
import view from '../photo/view.png';


import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container mt-5 mb-5">
                    <div className="row">
                        <div className="col-md-2 col-sm-12">
                            <div> <a href="#"> Portfolio</a>
                                <p className='fs-1 text-dark'>All Creative Projects</p></div>
                        </div>
                        <div className="col-md-4 col-sm-12">
                            <div>
                                <img src={view} alt="" className='view' />
                                <p className='text-primary'>20/June 2020</p>
                                <p className='fs-5'>Technology is evolving rapidly. New devices and applications.</p>

                            </div>
                        </div>
                        <div className="col-md-3 col-sm 6">
                            <div className='m-2'>
                                <img src="https://content.techgig.com/photo/77087595/Guide-How-to-build-career-as-a-programmer-without-college-degree.jpg" alt="" className='imgrr' />
                                <div className='hp'>
                                    <p className='text-primary mb-2 '>20/June 2020</p>
                                    <p className='fs-5'>Technology is evolving rapidly. New devices and applications.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm 6">
                            <div className='m-2'>
                                <img src="https://www.perforce.com/sites/default/files/styles/social_preview_image/public/image/2018-07/image-blog-will-ai-replace-programmers.jpg?itok=M7DIEwuM" alt="" className='imgrr' />
                                <div className='hp'>
                                    <p className='text-primary mb-2 '>20/June 2020</p>
                                    <p className='fs-5'>Technology is evolving rapidly. New devices and applications.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}
