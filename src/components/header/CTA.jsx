import React from 'react'
import CV from '../../assets/cv.pdf'
import {AiOutlineArrowDown} from 'react-icons/ai'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV <AiOutlineArrowDown className='cta__icon'/></a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA