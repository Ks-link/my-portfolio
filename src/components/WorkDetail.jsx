import React from 'react'
import Nav from './Nav'
import Loading from '../utilities/Loading';
import { restBase } from '../utilities/Utilities';
import { useState, useEffect } from 'react';

function WorkDetail({ workData }) {
    const restPathPage = restBase + 'pages/11'
    const restPathPosts = restBase + 'portfolio-work?_embed=true'
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
                    <Nav />
                    {restDataPosts.map(post =>
                        <article key={post.id} id={`post-${post.id}`}>
                            <h2>{post.title.rendered}</h2>
                            <p>{post.acf.summary}</p>
                        </article>
                    )}
                </section>
                :
                <Loading />
            }
        </>
    )
}

export default WorkDetail