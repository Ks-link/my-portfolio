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
                      <svg className='link-arrow' width="25" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M24.6575 15.706C25.0753 15.3862 25.4136 14.9761 25.6463 14.507C25.879 14.038 26 13.5225 26 13C26 12.4775 25.879 11.962 25.6463 11.493C25.4136 11.0239 25.0753 10.6138 24.6575 10.294C19.2464 6.15401 13.2042 2.89084 6.75704 0.62664L5.57824 0.212529C3.32534 -0.57821 0.944274 0.928299 0.639195 3.22912C-0.213065 9.71578 -0.213065 16.2842 0.639195 22.7709C0.94608 25.0717 3.32534 26.5782 5.57824 25.7875L6.75704 25.3734C13.2042 23.1092 19.2464 19.846 24.6575 15.706Z" />
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