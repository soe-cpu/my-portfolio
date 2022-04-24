import React from 'react'
import './Contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {FaViber} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_3xm4hun', 'template_spcpzec', form.current, 'OHJ7CQarQ8uWLRUkP')
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>soelinaung709@gmail.com</h5>
            <a href="mailto:soelinaung709@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Soe Lin Aung</h5>
            <a href="https://m.me/soelinaung709">Send a message</a>
          </article>
          <article className="contact__option">
            <FaViber className='contact__option-icon'/>
            <h4>Viber</h4>
            <h5>+95-9790586341</h5>
            <a href="mailto:soelinaung709@gmail.com">Send a message</a>
          </article>
        </div>
        {/* End of contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required /> 
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required ></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact