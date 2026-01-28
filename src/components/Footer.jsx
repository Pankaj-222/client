import React from 'react'
import './Footer.css'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className="footer-sections">
        <div>
          <h2>
            About Us
          </h2>
          <p>
            We are committed to providing the <br/> best service to our customers.
          </p>
        </div>
        <div>
          <h2>
            Quick Links
          </h2>
          <ul className="quick-links">
            <li><a href="/">About</a></li>
            <li><a href="/" >Services</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Term and Conditions</a></li>
          </ul>
        </div>
        <div>
            <h2>Follow Us On</h2>
  <ul className="social-links">
    <li>
      <FaTwitter />
      <span>Twitter</span>
    </li>
    <li>
      <FaFacebookF />
      <span>Facebook</span>
    </li>
    <li>
      <FaInstagram />
      <span>Instagram</span>
    </li>
  </ul>
        </div>
      </div><hr /><br />
      <div className='foot'>
        <p>&copy; Copyright 2026. All rights reserved.</p>
        <p>Made by Pankaj</p>
      </div>
    </footer>
  )
}

export default Footer