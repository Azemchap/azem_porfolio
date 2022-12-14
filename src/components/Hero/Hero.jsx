import React from 'react'
import './hero.css'
import Cta from '../CTA/Cta'
import ME from '../../assets/azem.png'
import Socials from '../Socials/Socials'

function Hero() {
    return (
        <section id='hero' className='hero'>
            <div className="container section-hero">
                <h5>Hello, I'm</h5>
                <h1>Azemchap Divine</h1>
                <h6> Fullstack Developer</h6>
                <Cta />

                <div className="my-info">
                    <Socials />

                    <div className="me">
                        <img src={ME} alt="me" />
                    </div>

                    <a href="#contact" className="scroll-down" id="contact">Scroll Down</a>
                </div>

                {/* <Nav /> */}
            </div>
        </section>
    )
}

export default Hero