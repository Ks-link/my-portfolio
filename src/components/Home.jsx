import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';
import Footer from '../components/Footer'

function Home() {

  const blobTilePath1 = "M299.573 0.0117952C383.827 -0.68483 464.399 29.4933 527.123 85.8386C593.69 145.636 652.676 224.267 648.821 313.742C645.062 400.988 570.388 461.482 508.296 522.789C446.877 583.433 385.665 653.419 299.573 658.579C209.874 663.955 123.236 617.321 64.2791 549.401C8.83898 485.532 -1.86527 398.347 0.245129 313.742C2.28945 231.786 19.1992 148.842 75.7492 89.5706C133.451 29.0929 216.055 0.70233 299.573 0.0117952Z";
  const blobTilePath2 = "M282.573 0.499949C366.827 -0.196676 457.276 44.6548 520 101C586.568 160.798 617.355 245.267 613.5 334.742C609.741 421.988 620 490 532 567.5C471.253 620.999 353.592 647.84 267.5 653C177.801 658.376 84.4566 660.92 25.5 593C-29.9401 529.131 23.3897 431.605 25.5001 347C27.5444 265.044 31.4499 194.771 88 135.5C145.701 75.0224 199.055 1.19048 282.573 0.499949Z";


  const textRef = useRef(null);

  useEffect(() => {
    if (textRef.current) {
      const textWrapper = textRef.current;
      // Wrap every letter in a span
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      anime.timeline({ loop: false })
        .add({
          targets: '.ml16 .letter',
          translateY: [-100, 0],
          easing: "easeOutExpo",
          duration: 1400,
          delay: (el, i) => 30 * i
        })
    }
  }, []);

  return (
    <>
      <article className='home-wrapper'>
        <svg className='blob-tile-home' width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        <div className='page-content-home'>
          <h1>Kaleb Link</h1>
          <h2 ref={textRef} className="ml16">Front End Web Developer</h2>
          <nav className='nav-home'><Nav currentPage="home" /></nav>
        </div>
      </article>
      <Footer />
    </>
  )
}

export default Home