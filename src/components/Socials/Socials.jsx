import React from 'react'
import './socials.css'
import { BsLinkedin, BsFacebook, BsGithub } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'


function Socials() {
    return (
        <div className='socials'>
            <a href="https://www.github.com" target="_blank" rel="noreferrer"><BsGithub /></a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin /></a>
            <a href="https://www.twitter.com" target="_blank" rel="noreferrer"><FiTwitter /></a>
            <a href="https://www.facebook.com" target="_blank" rel="noreferrer"><BsFacebook /></a>
        </div>
    )
}

export default Socials