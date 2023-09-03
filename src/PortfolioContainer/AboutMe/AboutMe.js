import React, {useEffect} from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import ScrollService  from '../../utilities/ScrollService'
// import Animations from '../../utilities/Animations'
import Slider from '../Slider.js';
import "./AboutMe.css";

export default function AboutMe(props) {
    // let fadeInScreenHandler = (screen)=>{
    //     if(screen.fadeInScreen !== props.id)
    //     return
    //     Animations.animations.fadeInScreen(props.id)
    // }
    // const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);


    return (
        <div className="about-me-container screen-container pb-5" id={props.id || ""}>
        <div className="about-me-parent">
            <ScreenHeading title={"About Me"} subHeading={"My Formal Bio Details"} />
            <div className="about-me-card container pb-5">
                <div className='row'>
                    <div className="col-12 col-lg-6 about-me-image">
                        {/* <img className='img-responsive' src='./maroun-3.png' alt='Maroun casual image' /> */}
                    
                        <Slider/>
                    
                    </div>
                    <div className="col-12 col-lg-6 mt-3">
                        <h5 class="text-center text-lg-left">My Story</h5>
                        <p className="about-me-description text-center text-lg-left">
                            My passion for coding began in high school when I dreamed of becoming a game developer. Though my path has taken some twists and turns over the years, I've never given up on that dream. I worked a variety of jobs and took evening college classes, all while continuing to teach myself to code. Three years ago, I started working as a web developer. Now, after years of perseverance, I'm close to finishing my bachelor's degree in computer science. In my time as a web developer, I've built up substantial skills working with major platforms like Shopify, Magento 2, and WordPress. I'm proud of the varied websites and applications I've built and maintained over the years.
                        </p>
                        <h5 class="text-center text-lg-left">My Hobbies</h5>
                        <p className="about-me-description text-center text-lg-left">
                           Outside of work and school I'm hanging out with my 3 cats, taking care of my plants (I'm a fan of ferns and roses), reading lots of books, playing videogames, doing small woodcarving projects, hiking, lifting and learning languages. I currently speak English and Russian fluently, intermediate Spanish and beginner level in Tagalog. I want to be able to freely speak and read in other languages as well in the future.
                        </p>
                        <div className="about-me-options">
                        <a href="/get-in-touch" onClick={(e) => { 
                            e.preventDefault(); 
                            ScrollService.scrollHandler.scrollToHireMe(); 
                        }} className="btn primary-btn m-2">
                            Get in Touch
                        </a>
                            <a className="btn highlighted-btn m-2" href="https://maroun-barqawi.tiiny.site/" target="_blank" rel="noreferrer">
                                View Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
  )
}
