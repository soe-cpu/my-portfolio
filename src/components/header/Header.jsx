import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../assets/pp1.png'
import HeaderSocials from './HeaderSocials'
import TypeAnimation from 'react-type-animation';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Soe Lin Aung</h1>
        <h3> 
        <TypeAnimation
          className="typeanimation"
          repeat={Infinity}
          sequence={['Web Developer', 1000, 'Web Designer', 1000, 'Fullstack Developer',1000]}
          wrapper="h3"
        />
        </h3>
        <h5 className="text-light">Web Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header