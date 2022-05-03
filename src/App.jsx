import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
// import Service from './components/service/Service'
import Portfolio from './components/portfolio/Portfolio'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import { useState, useEffect } from 'react'
import { HashLoader } from 'react-spinners'
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  height: 100vh;
  border-color: red;
`;
const App = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 4000)
  }, [])
  return (
        <div >
          {
            loading? 
            <HashLoader color={'#7bccb5'} loading={loading} size={100} css={override}/>
            :
            <>
              <Header />
              <Nav />
              <About />
              <Experience />
              {/* <Service /> */}
              {/* <Portfolio />
              <Testimonials /> */}
              <Contact />
              <Footer />
            </>
          }
        
        </div>
  )
}

export default App