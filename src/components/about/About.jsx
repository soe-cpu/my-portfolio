import React from 'react'
import './About.css'
import ME from '../../assets/aa3.jpg'
import {FiAward, FiUsers, FiFolder} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className='about__card'>
              <FiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Complete</small>
            </article>
          </div>

          <p>
          I would like to introduce myself that, I'm Soe Lin Aung, age 24, Male, Myanmar. I have been studied Computer science in Computer University of Myitkyina. Graduated in 2020.
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>

      </div>
    </section>
  )
}

export default About