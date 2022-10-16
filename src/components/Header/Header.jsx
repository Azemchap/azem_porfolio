import React from 'react'
import './header.css'
import { FaBars } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

function Header() {
    return (
        <header id='header' className="header">
            <section className='container header-section'>
                {/* <a href='#' className="logo">azem.tech</a> */}
                <h4 className="logo">azem.tech</h4>
                <div className="navbar">
                    {/* <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#Experience">Experience</a>
                    <a href="#testimonials">Testimonial</a>
                    <a href="#about">About</a> */}
                </div>
                <button className='btn contact-btn'> contact me<FiMail /></button>
                <div className="menu">
                    <FaBars className='bars' />

                </div>
            </section>
        </header>
    )
}

export default Header