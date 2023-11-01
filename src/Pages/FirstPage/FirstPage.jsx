import React from 'react'
import './FirstPage.css'
import Navbar from '../../Components/Navbar/Navbar'
import Hero from '../../Components/Hero/Hero'
import Tabs from '../../Components/Tabs/Tabs'
const FirstPage = () => {
  return (
    <div className='container'>
      <Navbar/>
     <Hero/>
     <Tabs/>
    </div>
  )
}

export default FirstPage
