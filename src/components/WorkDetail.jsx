import React from 'react'
import Nav from './Nav'
import { useLocation, NavLink } from 'react-router-dom'

function WorkDetail() {
    const location = useLocation()
    const { from } = location.state

    return (
        <>
            {from ? 
                <section id={`post-${from.id}`}>
                    <Nav />
                    <h1 className='detail-work-title'>{from.title.rendered}</h1>
                    
                    {/* display work summary */}
                    <section className='work-detail-summary'>
                        <p>{from.acf.summary}</p>
                        {/* display work summary image if there is one */}
                        {from.acf.summary_image.url ? <img className='detail-work-summary-image' src={from.acf.summary_image.url} alt={from.acf.summary_image.alt} /> : null}
                    </section>

                    {/* display work results section */}
                    <section className='work-detail-results'>
                        <h2>What I learned</h2>
                        <p>{from.acf.results}</p>
                    </section>

                    {/* display features section */}
                    <section className='work-detail-features'>
                        <h2>Features</h2>
                        {from.acf.feature_1 && <p>{from.acf.feature_1}</p>}
                        {from.acf.feature_image_1 && <img src={from.acf.feature_image_1.url} alt={from.acf.feature_image_1.alt} />}
                        {from.acf.feature_2 && <p>{from.acf.feature_2}</p>}
                        {from.acf.feature_image_2 && <img src={from.acf.feature_image_2.url} alt={from.acf.feature_image_2.alt} />}
                        {from.acf.feature_3 && <p>{from.acf.feature_3}</p>}
                        {from.acf.feature_image_3 && <img src={from.acf.feature_image_3.url} alt={from.acf.feature_image_3.alt} />}
                    </section>
                </section>

            // handle case from prop doesn't have any data (pls no)
            : <p>Error processing request, work data not found. Please return to the works page and try again by clicking <NavLink to='/works' end>here.</NavLink></p> 
            }
        </>
    )
}

export default WorkDetail