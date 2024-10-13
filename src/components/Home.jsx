import React from 'react'
import { useState, useEffect } from 'react'
import Nav from './Nav'

function Home() {
  // const restPath = restBase + 'pages/9';
  // const [restData, setData] = useState([])
  // const [isLoaded, setLoadStatus] = useState(false)

  return (
    <article>
      <h1>Kaleb Link</h1>
      <h2>Front End Web Developer</h2>
      <Nav />
    </article>
  )
}

export default Home