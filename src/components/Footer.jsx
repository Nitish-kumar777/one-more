import Link from 'next/link'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='footer'>
      <img src="/ttt.jpg" alt="" />
      <div className='footer-content'>
      <h2>Stay Connected</h2>
      <p>Follow us on social media to stay updated with the latest trends and news!</p>
      <p>&copy;contact</p>
          <div className='social-icons'>
            <Link href="https://facebook.com" target="_blank"><FaFacebook/></Link>
            <Link href="https://instagram.com" target="_blank"><FaInstagram/></Link>
            <Link href="https://twitter.com" target="_blank"><FaTwitter/></Link>
            <Link href="https://linkedin.com" target="_blank"><FaLinkedin/></Link>
          </div>
      </div>
    </footer>
  )
}

export default Footer
