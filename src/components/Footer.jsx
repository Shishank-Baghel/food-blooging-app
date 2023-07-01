import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>l=
      <div className="logo-footer">
        <img src="../assets/images/logohome.jpg" alt="" />
      </div>
      <div className="contact-us">
        <div className="title-contactus">Contact us
        </div>
        <div className="address">
        Lorem Ipsum Pvt Ltd.5/1, Magalton <br/> Road, Phartosh Gate near YTM<br/> Market, XYZ-343434
        </div>
      </div>
      <div className="more">
        <div className="title-more">
          More
        </div>
        <ul className='more-list'>
          <li>About Us</li>
          <li>Products</li>
          <li>Career</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <div className="social-links"></div>
    </div>
  )
}

export default Footer