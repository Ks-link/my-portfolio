import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Home from '../components/Home'
import Header from '../components/Header'
import Footer from '../components/Footer'

function AppRouter() {
    return (
        <BrowserRouter>
            <Header />
            <main id="main">
                <Routes>
                    <Route path='/' element={<Home />} />
                    {/* <Route path='/works' element={<Works />} /> */}
                    {/* <Route path='/about' element={<About />} /> */}
                </Routes>
            </main>
            <Footer />
        </BrowserRouter>
    )
}

export default AppRouter