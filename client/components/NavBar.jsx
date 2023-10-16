import React from 'react'

import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="nav-container">
      <div className='home-link-container'>
        <Link className='home-link' to='/'>CoralPedia</Link>
      </div>

      <div className='coral-type-link-container'>
        <div className='anemone-link-container'>
          <Link className='anemone-link' to='/Anemone'>Anemone</Link>
        </div>
        <div className='softcoral-link-container'>
          <Link className='softcoral-link' to='/SoftCoral'>SoftCoral</Link>
        </div>
        <div className='sps-link-container'>
          <Link className='sps-link' to='/SPS'>SPS</Link>
        </div>
        <div className='lps-link-container'>
          <Link className='sps-link' to='/LPS'>LPS</Link>
        </div>
      </div>
    </div>
  )
}

export default NavBar
