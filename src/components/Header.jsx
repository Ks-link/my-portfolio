import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
        <header>
            <nav className="site-navigation">
                <ul>
                    <li><NavLink to='/' end>Home</NavLink></li>
                    {/* <li><NavLink to='/works'>Works</NavLink></li> */}
                    {/* <li><NavLink to='/about'>About</NavLink></li> */}
                </ul>
            </nav>
        </header>
    </>
  )
}

export default Header