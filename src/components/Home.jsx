import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

function Home() {

  const blobTilePath1 = "M299.573 0.0117952C383.827 -0.68483 464.399 29.4933 527.123 85.8386C593.69 145.636 652.676 224.267 648.821 313.742C645.062 400.988 570.388 461.482 508.296 522.789C446.877 583.433 385.665 653.419 299.573 658.579C209.874 663.955 123.236 617.321 64.2791 549.401C8.83898 485.532 -1.86527 398.347 0.245129 313.742C2.28945 231.786 19.1992 148.842 75.7492 89.5706C133.451 29.0929 216.055 0.70233 299.573 0.0117952Z";
  const blobTilePath2 = "M264.573 0.0995673C348.827 -0.597058 484.276 29.2537 547 85.5989C613.567 145.397 579.355 240.866 575.5 330.341C571.741 417.587 583.592 504.692 521.5 566C460.081 626.643 350.665 643.84 264.573 649C174.874 654.376 140.457 633.92 81.5 566C26.0599 502.131 -1.11053 439.204 0.999869 354.6C3.04419 272.644 4.44974 199.37 60.9998 140.099C118.701 79.6213 181.055 0.790102 264.573 0.0995673Z";


  const textRef = useRef(null);

  useEffect(() => {
    // Ensure the textRef.current exists before modifying DOM
    if (textRef.current) {
      const textWrapper = textRef.current;
      // Wrap every letter in a span
      textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

      // Animation logic
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
    <article className='home-wrapper'>
      <svg className='blob-tile-home' width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d={blobTilePath1} 
          animate={{ d: blobTilePath2 }}
          transition={{
            duration: 15, 
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
  )
}

export default Home