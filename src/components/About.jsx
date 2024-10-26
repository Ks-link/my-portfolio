import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
import FeaturedImage from '../utilities/FeaturedImage';
import Footer from './Footer';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function About() {
  const restPath = restBase + 'pages/14?_embed=true'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  const blobTilePath1 = "M311.528 1.30535C397.296 8.30419 470.166 60.4951 526.6 125.46C578.715 185.454 615.489 261.608 606.205 340.533C597.672 413.071 529.616 455.534 481.328 510.333C427.149 571.818 393.34 670.196 311.528 674.943C228.92 679.736 176.667 592.299 120.808 531.252C68.6791 474.281 16.3139 416.999 5.53787 340.533C-6.97254 251.759 -1.81112 153.811 58.2362 87.2414C120.316 18.4182 219.15 -6.23282 311.528 1.30535Z";
  const blobTilePath2 = "M336.5 10.5C409.472 37.6946 469.166 60.4952 525.6 125.46C577.715 185.454 614.489 261.608 605.205 340.533C596.672 413.071 528.616 455.534 480.328 510.333C426.149 571.818 392.34 670.196 310.528 674.943C227.92 679.736 175.667 592.299 119.808 531.252C67.6792 474.281 15.314 416.999 4.53798 340.533C-7.97243 251.759 12.6392 180.5 56.5001 104C105.808 17.9999 251.472 -21.1877 336.5 10.5Z";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(restPath)
      if (response.ok) {
        const data = await response.json()
        setData(data)
        setLoadStatus(true)
      } else {
        setLoadStatus(false)
      }
    }
    fetchData()
  }, [restPath])

  return (
    <>
      {isLoaded ?
        <section className='about-wrapper' id={`post-${restData.id}`}>
          <svg className='blob-tile-about' width="608" height="676" viewBox="-80 -380 608 676" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d={blobTilePath1} 
                animate={{ d: blobTilePath2 }}
                transition={{
                  duration: 8, 
                  repeat: Infinity, 
                  repeatType: "mirror", 
                  ease: "easeInOut",
                }}/>
          </svg>

          <div className='page-content-about'>
              <h1>{restData.title.rendered}</h1>
              <nav className='nav-about'><Nav currentPage="about" /></nav>
              <div className="entry-content" dangerouslySetInnerHTML={{ __html: restData.content.rendered }}></div>
              <p className='email-text'>Get in touch!</p>
              <button className='email-link' onClick={() => {navigator.clipboard.writeText("kaleb.s.link@gmail.com")}}><svg clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m6 18h-3c-.48 0-1-.379-1-1v-14c0-.481.38-1 1-1h14c.621 0 1 .522 1 1v3h3c.621 0 1 .522 1 1v14c0 .621-.522 1-1 1h-14c-.48 0-1-.379-1-1zm1.5-10.5v13h13v-13zm9-1.5v-2.5h-13v13h2.5v-9.5c0-.481.38-1 1-1z" fill-rule="nonzero"/></svg> Copy Email</button>
              <FeaturedImage className='about-image' featuredImageObject={restData._embedded['wp:featuredmedia'][0]} />
          </div>
        </section>
        :
        <Loading />
      }
      <Footer />
    </>
  )
}

export default About