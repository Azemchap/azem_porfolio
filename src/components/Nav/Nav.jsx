import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineUser } from 'react-icons/ai'
import { BiBook } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'

const Nav = () => {
  return (
    <div className="nav">
      <a href="#hero"><AiOutlineHome /></a>
      <a href="#portfolio"><BiBook /></a>
      <a href="#services"><RiServiceLine /></a>
      <a href="#about"><AiOutlineUser /></a>
    </div>
  )
}

export default Nav