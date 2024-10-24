import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
// import FeaturedImage from '../utilities/FeaturedImage';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';

function About() {
  const restPath = restBase + 'pages/14?_embed=true'
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

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
          <svg className='blob-tile-about' width="608" height="676" viewBox="0 0 608 676" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path 
              fillRule="evenodd" 
              clipRule="evenodd" 
              d="M311.528 1.30535C397.296 8.30419 470.166 60.4951 526.6 125.46C578.715 185.454 615.489 261.608 606.205 340.533C597.672 413.071 529.616 455.534 481.328 510.333C427.149 571.818 393.34 670.196 311.528 674.943C228.92 679.736 176.667 592.299 120.808 531.252C68.6791 474.281 16.3139 416.999 5.53787 340.533C-6.97254 251.759 -1.81112 153.811 58.2362 87.2414C120.316 18.4182 219.15 -6.23282 311.528 1.30535Z" />
          </svg>

          <div className='page-content-about'>
              <h1>{restData.title.rendered}</h1>
              <nav className='nav-about'><Nav currentPage="about" /></nav>
              <div className="entry-content" dangerouslySetInnerHTML={{ __html: restData.content.rendered }}></div>
              {/* <FeaturedImage className='about-image' featuredImageObject={restData._embedded['wp:featuredmedia'][0]} /> */}
          </div>
        </section>
        :
        <Loading />
      }
    </>
  )
}

export default About