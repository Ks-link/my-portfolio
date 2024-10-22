import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import FeaturedImage from '../utilities/FeaturedImage';

function Works() {
  const restPathPage = restBase + 'pages/11'
  const restPathPosts = restBase + 'portfolio-work?acf_format=standard&_embed=true&orderby=modified'
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
        <section className='works-wrapper' id={`post-${restDataPage.id}`}>
          <div className='blob-tile-works'>
            <svg className='blob-tile-works' width="653" height="613" viewBox="0 0 653 613" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M313.658 2.34107C400.435 5.70242 489.555 16.4661 553.405 75.3282C619.538 136.295 651.604 225.138 652.894 315.076C654.204 406.375 629.446 502.072 560.385 561.803C494.573 618.725 400.412 615.206 313.658 608.487C235.347 602.421 159.271 580.51 102.402 526.331C44.1083 470.796 13.818 395.176 5.67491 315.076C-3.56516 224.185 -9.51597 121.1 54.5884 56.0063C118.917 -9.31494 222.047 -1.2075 313.658 2.34107Z" />
            </svg>
          </div>
          <div className='page-content-works'>
            <h1>{restDataPage.title.rendered}</h1>
            <nav className='nav-works'><Nav currentPage="works" /></nav>
            <section className='work-links-wrapper'>
              {restDataPosts.map(post =>
                <article key={post.id} id={`post-${post.id}`}>
                  <NavLink className='work-detail-link' to='/details' state={{ from: post }} end>
                    <h2>{post.title.rendered}
                      <svg className='link-arrow' width="25" height="25" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M27.1565 4.67036C27.2259 4.14878 27.175 3.61959 27.0079 3.12336C26.8408 2.62713 26.5618 2.17705 26.1924 1.80761C25.823 1.43818 25.3729 1.15921 24.8766 0.992088C24.3804 0.824968 23.8512 0.774136 23.3297 0.843492C16.5761 1.74226 9.99617 3.70733 3.83628 6.66515L2.70993 7.20587C0.55775 8.23977 -0.0606566 10.9887 1.35054 12.8314C5.33467 18.0208 9.97925 22.6653 15.1687 26.6495C17.0126 28.0594 19.7602 27.4423 20.7941 25.2901L21.3349 24.1637C24.2927 18.0038 26.2578 11.424 27.1565 4.67036Z" />
                      </svg>
                    </h2>
                    {post.featured_media !== 0 && post._embedded &&
                      <FeaturedImage featuredImageObject={post._embedded['wp:featuredmedia'][0]} />
                    }
                  </NavLink>
                </article>
              )}
            </section> {/* end works wrapper */}
          </div>
        </section>
        :
        <Loading />
      }
    </>
  )
}

export default Works