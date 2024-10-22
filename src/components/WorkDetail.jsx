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
                    <div>
                        <svg className='blob-tile-work-detail' width="674" height="840" viewBox="0 0 674 840" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path 
                                fillRule="evenodd" 
                                clipRule="evenodd" 
                                d="M342.879 9.81308C407.361 -4.55478 481.632 -9.525 533.781 40.5775C585.542 90.3073 582.858 187.486 607.186 263.749C630.178 335.823 682.347 399.756 672.86 476.549C663.383 553.257 598.194 593.775 559.032 653.539C518.78 714.966 499.174 807.135 439.452 832.741C379.585 858.411 317.372 809.844 257.929 782.641C202.003 757.049 146.205 731.387 103.503 679.005C58.228 623.467 22.0861 555.315 8.98337 477.261C-4.61937 396.228 -6.24916 304.908 28.984 235.09C63.1879 167.312 135.509 156.675 190.786 117.003C242.307 80.0278 284.548 22.8103 342.879 9.81308Z" 
                            />
                        </svg>
                    </div>
                    <div className='page-content-work-detail'>
                        <nav className='nav-work-detail'><Nav /></nav>
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
                    </div>
                </section>

            // handle case from prop doesn't have any data (pls no)
            : <p>Error processing request, work data not found. Please return to the works page and try again by clicking <NavLink to='/works' end>here.</NavLink></p> 
            }
        </>
    )
}

export default WorkDetail