import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import React from "react";

import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import LandingPage from './pages/LandingPage'
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";

function App() {
 
  

  const [isLoggedIn, setIsLoggedIn]= useState(false)

  return (
    <div>
      <div className='bg-blue-900'>
      {/* <Navbar /> */}
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      </div>
  <Routes>
    <Route path='/' element={<LandingPage  />}/>
    
    {/* <Route path='/' element={<Home/>}/> */}
   

    <Route path="/home" element={<PrivateRoute isLoggedIn={isLoggedIn}><Home/></PrivateRoute>} />

    <Route path="/login" element={<LogIn setIsLoggedIn={setIsLoggedIn} />} />

    <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />

    <Route path='/cart' element={<PrivateRoute isLoggedIn={isLoggedIn}><Cart/></PrivateRoute>}/>
  </Routes>



    </div>
  )
}

export default App
