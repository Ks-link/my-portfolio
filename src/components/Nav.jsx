import React from 'react'
import { NavLink } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <ul>
            <li><NavLink to='/' end>Home</NavLink></li>
            <li><NavLink to='/works'>Works</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </div>
  )
}

export default Nav