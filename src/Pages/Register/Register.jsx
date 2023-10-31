import React from 'react'
import './Register.css'
const Register = () => {
  return (
    <div>
      <div className='register-container'>
      <div className="register-heading">
        <h1>AnyGames</h1>
      </div>
      <div className="register-box">
        <div id="register-title"><h2>register</h2></div>
        <input id='register-name' type='text' placeholder='Name'/>
        <input id='register-email' type='email' placeholder='Email'/>
        <input id='register-password' type='password' placeholder='Password' />
        <div className="register-showPassword">
        <input type='checkbox'/><p>Show password</p>
        </div>
        <button id='register-button'>register</button>
        <div className="register-link">
        <a href='/login'>Already have an account</a>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Register
