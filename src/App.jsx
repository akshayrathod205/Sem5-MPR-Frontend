import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/navbar'
import Landing from './Components/landing'
import Footer from './Components/footer'

function App() {

  return (
    <div>
    <Navbar/>
    <Landing/>  
    <Footer/>
    </div>
  )
}

export default App
