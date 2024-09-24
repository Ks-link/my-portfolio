import React from 'react'
import { useState, useEffect } from 'react'

function Home() {
  const restPath = restBase + 'pages/9';
  const [restData, setData] = useState([])
  const [isLoaded, setLoadStatus] = useState(false)

  return (
    <h1>Kaleb Link</h1>
  )
}

export default Home