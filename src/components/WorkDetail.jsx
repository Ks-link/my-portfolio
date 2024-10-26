import React from 'react'
import { useState } from 'react'
import { useLocation, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import Nav from './Nav'

function WorkDetail() {
    const location = useLocation()
    const { from } = location.state
    const [workDetailToDisplay, setWorkDetailToDisplay] = useState("Summary");
    const [featureToDisplay, setFeatureToDisplay] = useState(0);

    const blobTilePath1 = "M342.879 9.81308C407.361 -4.55478 481.632 -9.525 533.781 40.5775C585.542 90.3073 582.858 187.486 607.186 263.749C630.178 335.823 682.347 399.756 672.86 476.549C663.383 553.257 598.194 593.775 559.032 653.539C518.78 714.966 499.174 807.135 439.452 832.741C379.585 858.411 317.372 809.844 257.929 782.641C202.003 757.049 146.205 731.387 103.503 679.005C58.228 623.467 22.0861 555.315 8.98337 477.261C-4.61937 396.228 -6.24916 304.908 28.984 235.09C63.1879 167.312 135.509 156.675 190.786 117.003C242.307 80.0278 284.548 22.8103 342.879 9.81308Z";
    const blobTilePath2 = "M342.879 9.81308C407.361 -4.55478 481.632 -9.525 533.781 40.5775C585.542 90.3073 587.501 182 633.5 249.5C672.861 307.258 682.348 399.756 672.861 476.549C663.384 553.257 626.663 610.236 587.501 670C547.249 731.427 491.222 781.894 431.5 807.5C371.633 833.17 317.372 809.844 257.929 782.641C202.003 757.049 146.202 767.382 103.5 715C58.2252 659.462 55.6028 584.554 42.5 506.5C28.8973 425.467 -17.7331 280.818 17.5001 211C51.704 143.222 146.723 126.672 202 87C253.521 50.0248 284.548 22.8103 342.879 9.81308Z";

    return (
        <>
        <a href="#site-main-content" class="screen-reader-text">skip to content</a>
            {from ?
                <section className='work-detail-wrapper' id={`post-${from.id}`}>
                    <div>
                        <svg className='blob-tile-work-detail' width="674" height="840" viewBox="0 0 674 840" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <motion.path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d={blobTilePath1}
                                animate={{ d: blobTilePath2 }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    ease: "easeInOut",
                                }} />
                        </svg>
                    </div>
                    <div id='site-main-content' className='page-content-work-detail'>
                        <nav className='nav-work-detail'><Nav currentPage="details" /></nav>
                        <h1 className='detail-work-title'>{from.title.rendered}</h1>
                        <button className='work-external-link'><a target='_blank' href={`https://kaleblink.com/${from.slug}`}>Check It Out</a></button>

                        {/* display work summary on button click */}
                        <nav className='detail-nav'>
                            <button className='feature-button' onClick={() => setWorkDetailToDisplay("Summary")}>Summary</button>
                            <button className='feature-button' onClick={() => setWorkDetailToDisplay("Results")}>Results</button>
                            <button className='feature-button' onClick={() => setWorkDetailToDisplay("Features")}>Features</button>
                        </nav>

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
                                <h2>What I Learned</h2>
                                <p>{from.acf.results}</p>
                                <div>
                                    {/* Map over json and grab each taxonomy name */}
                                    <ul>
                                        {from._embedded['wp:term'][0].map(term =>
                                            <li key={term.id}>
                                                <p>{term.name}</p>
                                            </li>
                                        )}
                                    </ul>
                                </div>
                            </section>
                        }

                        {/* display features section */}
                        {workDetailToDisplay === "Features" &&
                            <section className='work-detail-features'>
                                <div className='features-title'>
                                    <h2>Features</h2>
                                    <nav>
                                        <button onClick={() => featureToDisplay > 0 ? setFeatureToDisplay(featureToDisplay - 1) : setFeatureToDisplay(2)}>
                                            <svg className='feature-arrow' width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1.34253 10.294C0.924675 10.6138 0.586426 11.0239 0.353712 11.493C0.120998 11.962 0 12.4775 0 13C0 13.5225 0.120998 14.038 0.353712 14.507C0.586426 14.9761 0.924675 15.3862 1.34253 15.706C6.75357 19.846 12.7958 23.1092 19.243 25.3734L20.4218 25.7875C22.6747 26.5782 25.0557 25.0717 25.3608 22.7709C26.2131 16.2842 26.2131 9.71578 25.3608 3.22911C25.0539 0.928298 22.6747 -0.578208 20.4218 0.21253L19.243 0.626642C12.7958 2.89084 6.75357 6.15401 1.34253 10.294Z" />
                                            </svg>
                                        </button>
                                        <button onClick={() => featureToDisplay < (from.acf.feature_3 ? 2 : 1) ? setFeatureToDisplay(featureToDisplay + 1) : setFeatureToDisplay(0)}>
                                            <svg className='feature-arrow' width="20" height="20" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M24.6575 15.706C25.0753 15.3862 25.4136 14.9761 25.6463 14.507C25.879 14.038 26 13.5225 26 13C26 12.4775 25.879 11.962 25.6463 11.493C25.4136 11.0239 25.0753 10.6138 24.6575 10.294C19.2464 6.15401 13.2042 2.89084 6.75704 0.62664L5.57824 0.212529C3.32534 -0.57821 0.944274 0.928299 0.639195 3.22912C-0.213065 9.71578 -0.213065 16.2842 0.639195 22.7709C0.94608 25.0717 3.32534 26.5782 5.57824 25.7875L6.75704 25.3734C13.2042 23.1092 19.2464 19.846 24.6575 15.706Z" />
                                            </svg>
                                        </button>
                                    </nav>
                                </div>

                                {featureToDisplay === 0 && (
                                    <>
                                        {from.acf.feature_1 && <p>{from.acf.feature_1}</p>}
                                        {from.acf.feature_image_1 && <img className='detail-work-feature-image' src={from.acf.feature_image_1.url} alt={from.acf.feature_image_1.alt} />}
                                    </>
                                )}
                                {featureToDisplay === 1 && (
                                    <>
                                        {from.acf.feature_2 && <p>{from.acf.feature_2}</p>}
                                        {from.acf.feature_image_2 && <img className='detail-work-feature-image' src={from.acf.feature_image_2.url} alt={from.acf.feature_image_2.alt} />}
                                    </>
                                )}
                                {featureToDisplay === 2 && (
                                    <>
                                        {from.acf.feature_3 && <p>{from.acf.feature_3}</p>}
                                        {from.acf.feature_image_3 && <img className='detail-work-feature-image' src={from.acf.feature_image_3.url} alt={from.acf.feature_image_3.alt} />}
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