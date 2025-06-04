import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Version Two (1).png'

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="logo" className='logo' />
      <ul>
        <li>Home</li>
        <li>Programs</li>
        <li>About Us</li>
        <li>Gallery</li>
        <li>Reviews</li>
        <li><button className='btn'>Contact Us</button></li>
      </ul>
    </nav>
  )
}

export default Navbar
