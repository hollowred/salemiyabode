import React from 'react'
import './nav.css'
import {AiFillHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt, BiMessageDots} from 'react-icons/bi'
import {FaSuitcase} from 'react-icons/fa'
import {useState} from 'react'



const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience"><BiBookAlt /></a>
      <a href="#portfolio"><FaSuitcase /></a>
      <a href="#contact"><BiMessageDots/></a>
    </nav>  
  )
}

export default Nav