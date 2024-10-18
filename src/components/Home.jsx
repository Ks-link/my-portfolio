import React from 'react'
import Nav from './Nav'
import { motion } from 'framer-motion';

function Home() {

  return (
    <motion.article>
      <article className='home-wrapper'>
        <h1>Kaleb Link</h1>
        <h2>Front End Web Developer</h2>
        <Nav currentPage="home" />
      </article>
    </motion.article>
  )
}

export default Home