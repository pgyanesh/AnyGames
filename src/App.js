import React from 'react'
import LoginSignup from './Pages/LoginSignup/LoginSignup'
 import FirstPage from './Pages/FirstPage/FirstPage'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<FirstPage/>}/>
     <Route path='/login' element={ <LoginSignup/>}/>
     
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
