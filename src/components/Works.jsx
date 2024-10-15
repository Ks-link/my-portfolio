import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FeaturedImage from '../utilities/FeaturedImage';

function Works() {
    const restPathPage = restBase + 'pages/11'
    const restPathPosts = restBase + 'portfolio-work?acf_format=standard&_embed=true'
    const [restDataPage, setDataPage] = useState([])
    const [restDataPosts, setDataPosts] = useState([])
    const [isLoaded, setLoadStatus] = useState(false)

    useEffect(() => {
      const fetchData = async () => {
          const response_page = await fetch(restPathPage)
          const response_posts = await fetch(restPathPosts)
          if (response_page.ok && response_posts.ok) {
              const restDataPage = await response_page.json()
              const restDataPosts = await response_posts.json()
              setDataPage(restDataPage)
              setDataPosts(restDataPosts)
              setLoadStatus(true)
          } else {
              setLoadStatus(false)
          }
      }
      fetchData()
    }, [restPathPage, restPathPosts])

  return (
    <>
      {isLoaded ?
        <section id={`post-${restDataPage.id}`}>
          <h1>{restDataPage.title.rendered}</h1>
          <Nav currentPage="works" />
          {restDataPosts.map(post =>
            <article key={post.id} id={`post-${post.id}`}>
              <NavLink to='/details' state={{ from: post }} end>
                <h2>{post.title.rendered}</h2>
              </NavLink>
              {post.featured_media !== 0 && post._embedded &&
                <FeaturedImage featuredImageObject={post._embedded['wp:featuredmedia'][0]} />
              }
            </article>
          )}
        </section>
        :
        <Loading />
      }
    </>
  )
}

export default Works