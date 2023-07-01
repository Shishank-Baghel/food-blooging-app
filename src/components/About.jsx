import React from 'react'
import './About.css'
import aboutGirl from '../assets/images/about.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left-container">
        <div className="about-girl-img">
        <img src={aboutGirl} />
        </div>
      </div>
      <div className="about-right-container">
        <div className="title">About Us</div>
        <div className="about-descr">Lorem Ipsum is simpl dummy text of the printing <br/> typesetting industry. Lorem Ipsum has been the industry's<br/> standard dummy text ever since the 1500s, when an <br/> printer took a galley of type and scrambled it to make a <br/> specimen book. t has survived not only five centuries.</div>
        <div className="about-read-more-btn">
        <button>Read More</button>

        </div>
      </div>
    </div>
  )
}

export default About