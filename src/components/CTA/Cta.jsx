import React from 'react'
import CV from '../../assets/cv.pdf'
import './cta.css'
import { FaWhatsapp } from 'react-icons/fa'
import { AiOutlineFilePdf } from 'react-icons/ai'


function Cta() {
    return (
        <div className="cta">
            <a href={CV} download className='btn'>Download CV <AiOutlineFilePdf /></a>
            <a href="#contact" className='btn btn-primary'> whatsapp <FaWhatsapp /> </a>
        </div>
    )
}

export default Cta