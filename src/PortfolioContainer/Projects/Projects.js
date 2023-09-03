import React from 'react'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading'
import Animations from '../../utilities/Animations'
import ScrollService from '../../utilities/ScrollService'
import './Projects.css'

export default function Projects(props) {

    let fadeInScreenHandler = (screen)=>{
        if(screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }
    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  return (
    <div className="projects-container screen-container pb-5" id={props.id || ""}>
        <div className="projects-parent">
            <ScreenHeading title={"Projects"} subHeading={"My Latest Works"} />
        </div>

        <div className="container">

            <div className='row'>

                <div className='col-12 col-md-4 mb-5 project-card'>
                    <a className='text-decoration-none' href='https://ishoppurium.com/' target='_blank'>
                        <div className="project-image">
                            <img className='img-responsive' src='./portfolio-1.webp' alt='Purium' />
                        </div>
                        <div className="project-textbox">
                            <h5>Purium</h5>
                            <p>Shopify based store for food supplements. I was the developer and project manager for this and several other company's websites.</p>
                        </div>
                    </a>
                </div>

                <div className='col-12 col-md-4 mb-5 project-card'>
                    <a className='text-decoration-none' href='https://eargasm.com/' target='_blank'>
                        <div className="project-image">
                            <img className='img-responsive' src='./portfolio-2.webp' alt='Eargasm' />
                        </div>
                        <div className="project-textbox">
                            <h5>Eargasm</h5>
                            <p>Shopify based store for earplugs. I have designed and improved several pages and sections for better user experience and accessibility.</p>
                        </div>
                    </a>
                </div>

                <div className='col-12 col-md-4 mb-5 project-card'>
                    <a className='text-decoration-none' href='https://www.panoplie.com/' target='_blank'>
                        <div className="project-image">
                            <img className='img-responsive' src='./portfolio-3.webp' alt='Panoplie' />
                        </div>
                        <div className="project-textbox">
                            <h5>Panoplie</h5>
                            <p >Magento 2 based designer furniture store. I have developed this website from scratch and maintained other company's websites.</p>
                        </div>
                    </a>
                </div>
            </div>
            
        </div>


    </div>
    

  )
}
