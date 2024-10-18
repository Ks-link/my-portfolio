import React from 'react'
import { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import Nav from './Nav'

function WorkDetail() {
    const location = useLocation()
    const { from } = location.state
    const [workDetailToDisplay, setWorkDetailToDisplay] = useState("Summary");
    const [featureToDisplay, setFeatureToDisplay] = useState(0);

    return (
        <>
            {from ? 
                <section className='work-detail-wrapper' id={`post-${from.id}`}>
                    <Nav />
                    <h1 className='detail-work-title'>{from.title.rendered}</h1>
                    
                    {/* display work summary on button click */}
                    <button onClick={ () => setWorkDetailToDisplay("Summary") }>Summary</button>
                    <button onClick={ () => setWorkDetailToDisplay("Results") }>Results</button>
                    <button onClick={ () => setWorkDetailToDisplay("Features") }>Features</button>
                    
                    {workDetailToDisplay === "Summary" && 
                        <section className='work-detail-summary'>
                            <h2>Summary</h2>
                            {/* display work summary image if there is one */}
                            {from.acf.summary_image.url ? <img className='detail-work-summary-image' src={from.acf.summary_image.url} alt={from.acf.summary_image.alt} /> : null}
                            <p>{from.acf.summary}</p>
                        </section>
                    }

                    {/* display work results section */}
                    {workDetailToDisplay === "Results" &&
                        <section className='work-detail-results'>
                            <h2>What I learned</h2>
                            <p>{from.acf.results}</p>
                        </section>
                    }

                    {/* display features section */}
                    {workDetailToDisplay === "Features" &&
                        <section className='work-detail-features'>
                            <h2>Features</h2>
                            <button onClick={ () => featureToDisplay < 2 ? setFeatureToDisplay(featureToDisplay + 1) : setFeatureToDisplay(0) }>Next</button>
                            <button onClick={ () => featureToDisplay > 0 ? setFeatureToDisplay(featureToDisplay - 1) : setFeatureToDisplay(2) }>Previous</button>

                            {featureToDisplay === 0 && (
                                <>
                                    <h3>Feature 1</h3>
                                    {from.acf.feature_1 && <p>{from.acf.feature_1}</p>}
                                    {from.acf.feature_image_1 && <img src={from.acf.feature_image_1.url} alt={from.acf.feature_image_1.alt} />}
                                </>
                            )}
                            {featureToDisplay === 1 && (
                                <>
                                    <h3>Feature 2</h3>
                                    {from.acf.feature_2 && <p>{from.acf.feature_2}</p>}
                                    {from.acf.feature_image_2 && <img src={from.acf.feature_image_2.url} alt={from.acf.feature_image_2.alt} />}
                                </>
                            )}
                            {featureToDisplay === 2 && (
                                <>
                                    <h3>Feature 3</h3>
                                    {from.acf.feature_3 && <p>{from.acf.feature_3}</p>}
                                    {from.acf.feature_image_3 && <img src={from.acf.feature_image_3.url} alt={from.acf.feature_image_3.alt} />}
                                </>
                            )}                                  
                        </section>
                    }
                </section>

            // handle case from prop doesn't have any data (pls no)
            : <p>Error processing request, work data not found. Please return to the works page and try again by clicking <NavLink to='/works' end>here.</NavLink></p> 
            }
        </>
    )
}

export default WorkDetail