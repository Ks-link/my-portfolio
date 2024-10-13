import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';

function Works() {
    const restPath = restBase + 'pages/11?_embed=true';
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
        <article id={`post-${restData.id}`}>
          <h1>{restData.title.rendered}</h1>
          <Nav />
          <div className="entry-content">
            <section>
                <h2>{restData.acf.left_section_heading}</h2>
                <p>{restData.acf.left_section_content}</p>
            </section>

            <section>
                <h2>{restData.acf.right_section_heading}</h2>
                <p>{restData.acf.right_section_content}</p>
            </section>
          </div>
        </article>
        :
        <Loading />
      }
    </>
  )
}

export default Works