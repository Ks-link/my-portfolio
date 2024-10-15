import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav( prop ) {

  return (
    <nav className='nav-wrapper'>
        <ul>
            {prop.currentPage !== "home" && <li><NavLink to='/' end>Home</NavLink></li>}
            {prop.currentPage !== "works" && <li><NavLink to='/works'>Works</NavLink></li>}
            {prop.currentPage !== "about" && <li><NavLink to='/about'>About</NavLink></li>}
      </ul>
    </nav>
  )
}

export default Nav