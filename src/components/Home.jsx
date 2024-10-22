import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion';

function Home() {

  const blobTilePath1 = "M299.573 0.0117952C383.827 -0.68483 464.399 29.4933 527.123 85.8386C593.69 145.636 652.676 224.267 648.821 313.742C645.062 400.988 570.388 461.482 508.296 522.789C446.877 583.433 385.665 653.419 299.573 658.579C209.874 663.955 123.236 617.321 64.2791 549.401C8.83898 485.532 -1.86527 398.347 0.245129 313.742C2.28945 231.786 19.1992 148.842 75.7492 89.5706C133.451 29.0929 216.055 0.70233 299.573 0.0117952Z";
  const blobTilePath2 = "M307.309 3.93679C367.554 2.29484 431.847 -10.3012 483.679 20.4506C536.035 51.5138 564.513 110.805 584.408 168.34C603.065 222.294 602.563 279.688 592.767 335.93C583.196 390.875 565.573 444.877 528.92 486.914C492.331 528.877 438.8 547.199 388.236 570.501C328.91 597.841 272.36 642.151 207.42 635.076C139.108 627.634 69.9609 590.317 33.7963 531.887C-1.36191 475.083 26.9577 402.512 22.2325 335.875C17.9336 275.251 -14.0719 214.77 7.2743 157.866C29.0497 99.8172 81.8488 58.1993 137.011 29.8988C189.158 3.14571 248.722 5.53356 307.309 3.93679Z";

  return (
    <article className='home-wrapper'>
      <svg className='blob-tile-home' width="700" height="700" viewBox="0 0 700 700" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d={blobTilePath1} 
          animate={{ d: blobTilePath1 }}
          transition={{
            duration: 2, 
            repeat: Infinity, 
            repeatType: "mirror", 
            ease: "easeInOut",
          }}/>
      </svg>
      <div className='page-content-home'>
        <h1>Kaleb Link</h1>
        <h2>Front End Web Developer</h2>
        <nav className='nav-home'><Nav currentPage="home" /></nav>
      </div>
    </article>
  )
}

export default Home