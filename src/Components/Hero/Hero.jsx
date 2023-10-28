import React from 'react'
import './Hero.css'
import hero2 from './hero2.jpg'
const Hero = () => {
  return (
    <div className='hero-container'>
      <div className="hero-img ">
        <img src={hero2} alt='hero'/>
        <div className="hero-content layers">
        <h1>Explore</h1>
        <p>Explore new deals and new releases </p>
        </div>
      </div>
    </div>
  )
}

export default Hero
