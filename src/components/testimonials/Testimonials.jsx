import React from 'react'
import './Testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR1} alt="Testimonial Avatar" />
          </div>
          <h5 className='client__name'>Ko Ko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR2} alt="Testimonial Avatar" />
          </div>
          <h5 className='client__name'>Ko Ko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR3} alt="Testimonial Avatar" />
          </div>
          <h5 className='client__name'>Ko Ko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </small>
        </SwiperSlide>
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img src={AVATAR4} alt="Testimonial Avatar" />
          </div>
          <h5 className='client__name'>Ko Ko</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          </small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Testimonials