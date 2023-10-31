import React from 'react'
import './LoginSignup.css'
import { Link } from 'react-router-dom'
const LoginSignup = () => {
  return (
    <div className='login-container'>
      <div className="login-heading">
        <h1>AnyGames</h1>
      </div>
      <div className="login-box">
        <div id="login-title"><h2>Login</h2></div>
        <input id='login-email' type='email' placeholder='Email'/>
        <input id='login-password' type='password' placeholder='Password' />
        <div className="login-showPassword">
        <input type='checkbox'/><p>Show password</p>
        </div>
        <button id='login-button'>Login</button>
        <div className="login-link">
        <Link to='/register'>Create an account</Link>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
