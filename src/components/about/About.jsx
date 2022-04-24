import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
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
              <small>2+ Years Working</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>

            <article className='about__card'>
              <FiFolder className='about__icon'/>
              <h5>Projects</h5>
              <small>20+ Complete</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci modi doloremque, numquam quaerat eius fugit maiores nam voluptatem eligendi, explicabo quibusdam aut. Officiis fugiat, quis dolorum minima qui sunt aspernatur.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>
    </section>
  )
}

export default About