import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer>
        <nav className="site-navigation">
            <ul>
                <li><Link to='/'>Home</Link></li>
                {/* <li><Link to='/about'>About</Link></li> */}
            </ul>
        </nav>
        <p className="copyright">Created by Kaleb Link. 2024.</p>
    </footer>
  )
}

export default Footer