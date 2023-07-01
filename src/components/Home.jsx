import React from 'react'
import './Home.css'
import logoHome from '../assets/images/logohome.jpg'
import pizzaHome from '../assets/images/pizza_home.png'
import red_home from '../assets/images/red_home.png'

const Home = () => {
  return (
    <>
    <div className="home">

    <div className="left-container">
    <div className="logo">
      <img src={logoHome} alt="" />
    </div>
    <div className="hero-text">
              Discover the <br/>
          <span>Best</span> Food<br/> and Drinks
    </div>
    <div className="description">
      Naturally made Healthcare Products for the<br/> better care & support of your body.
    </div>
    <div className="explore-btn">
      <button>Explore Now!</button>
    </div>
    </div>

    <div className="right-container">
      <div className="pizza-img">
        <img src={pizzaHome} alt="" />
      </div>
      <div className="img-wrapper">
        <img src={red_home} alt="" />
      </div>
    </div>

    </div>
    
      
    
    </>
  )
}

export default Home;