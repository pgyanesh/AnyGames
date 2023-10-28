import React from 'react'
import './Hero.css'
import herosection from './herosection.jpg'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-img">
        <img src={herosection} alt='hero'/>
      </div>
    </div>
  )
}

export default Hero
