import React from 'react'
import './Footer.css'
import {BsFacebook, BsInstagram} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Soe</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        {/* <li><a href="#service">Service</a></li> */}
        {/* <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://github.com/soe-cpu" target="_blank"><FaGithub /></a>
        <a href="https://www.facebook.com/soelinaung709" target="_blank"><BsFacebook /></a>
        <a href="https://www.instagram.com/sox8206/" target="_blank"><BsInstagram /></a>  
      </div>

      <div className="footer__copyright">
        <small>&copy; Copyright 2021. All Rights Reserved.</small>
      </div>
    </footer>
  )
}

export default Footer