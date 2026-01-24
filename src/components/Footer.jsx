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
            <li><a href="/about" >About</a></li>
            <li><a href="/services">Services</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h2 >
            Follow Us On
          </h2>
          <ul >
            <li>
              <FaFacebookF />{" "}<br/>
              <a href="/facebook">Facebook</a>
            </li>
            <li>
              <FaTwitter />{" "}<br/>
              <a href="/twitter">Twitter</a>
            </li>
            <li>
              <FaInstagram />{" "}<br/>
              <a href="/instagram">Instagram</a>
            </li>
          </ul>
        </div>
      </div><hr /><br />
      <div>
        <p>&copy; Copyright 2026 Pankaj. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer