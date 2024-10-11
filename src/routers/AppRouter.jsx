import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'

function AppRouter() {
    return (
        <BrowserRouter>
            <main id="main">
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/works' element={<Works />} />
                    <Route path='/about' element={<About />} />
                </Routes>
            </main>
        </BrowserRouter>
    )
}

export default AppRouter