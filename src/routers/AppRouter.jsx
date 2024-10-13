import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Works from '../components/Works'
import About from '../components/About'
import WorkDetail from '../components/WorkDetail'

function AppRouter() {
    return (
        <BrowserRouter>
            <main id="main">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/works' element={<Works />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/details' element={<WorkDetail workData={ "test" } />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default AppRouter