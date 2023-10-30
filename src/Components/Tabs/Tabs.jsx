import React from 'react'
import './Tabs.css'
import finalgames from './finalgames.jpg'
import finalconsole from './finalconsole.png'
import finalaccessories from './finalaccessories.jpg'
const Tabs = () => {
  return (
    <div className='tabs-container'>

      <img className='gaming-tab' src={finalgames} alt="" />
      <img className='console-tab'src={finalconsole} alt="" />
      <img className='accessories-tab' src={finalaccessories} alt="" />
    </div>
  )
}

export default Tabs
