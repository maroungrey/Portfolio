import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

export default function Profile() {
  return (
    <div className='container'>
        <div className='row'>

            <div className='col-12 col-md-6 text-md-left text-center d-md-flex align-items-center'>
                <div>
                    <div className='icons'>

                        <a className='icons-i' href='https://www.linkedin.com/in/maroungrey/' target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>
                        <a className='icons-i' href='https://github.com/maroungrey' target="_blank">
                            <i className='fa fa-github'></i>
                        </a>
                        <a className='icons-i' href='https://www.instagram.com/the_real_maroun/' target="_blank">
                            <i className='fa fa-instagram'></i>
                        </a>

                    </div>
            
                    <div className='profile-details-name mt-2'>
                        <span className='primary-text'>
                            Hello, I'm <span className='highlighted-text'>Maroun</span>
                        </span>
                    </div>
                    <div className='profile-details-role mt-2'>
                        <span className='primary-text'>
                            <h1 className='font-hermit'>
                            <TypeAnimation
                            sequence={[
                                'Software Engineer',
                                1000, 
                                'Full Stack Developer',
                                1000,
                                'E-Commerce Developer',
                                1000,
                                'Web Developer',
                                1000,

                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            />
  
                            </h1>
                            <span className='profile-role-tagline'>
                                Transforming ideas into seamless software solutions
                            </span>
                        </span>
                    </div>
                    <div className='profile-options mt-3'>
                        <div className='row'>
                            <div className='profile-buttons'>                    
                            <a href="/get-in-touch" onClick={(e) => { 
                                e.preventDefault(); 
                                ScrollService.scrollHandler.scrollToHireMe(); 
                            }} className="btn primary-btn m-2">
                                Get in Touch
                            </a>
                                <a href='https://maroun-barqawi.tiiny.site/' target='_blank' className='btn highlighted-btn m-2'>View Resume</a>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-12 col-md-6 profile-img'>
                    <img className='img-responsive' src='./maroun-1.webp' alt='Maroun profile image' />
            </div>
        </div>


    </div>
  )
}
