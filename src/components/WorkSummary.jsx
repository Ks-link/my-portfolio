import React from 'react'

function WorkSummary(from) {
console.log(from);

    return (
        <>
            {from ? 
            <section className='work-detail-summary'>
                <h2>Summary</h2>
                <p>{from.acf.summary}</p>
                {/* display work summary image if there is one */}
                {from.acf.summary_image.url ? <img className='detail-work-summary-image' src={from.acf.summary_image.url} alt={from.acf.summary_image.alt} /> : null}
            </section>
            : <p>Error processing request, work data not found. Please return to the works page and try again by clicking <NavLink to='/works' end>here.</NavLink></p> 
            }
        </>
    )
}

export default WorkSummary