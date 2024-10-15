import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';

function About() {
  const restPath = restBase + 'pages/14'
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
        <section id={`post-${restData.id}`}>
          <h1>{restData.title.rendered}</h1>
          <Nav currentPage="about" />
          <div className="entry-content" dangerouslySetInnerHTML={{ __html: restData.content.rendered }}></div>
        </section>
        :
        <Loading />
      }
    </>
  )
}

export default About